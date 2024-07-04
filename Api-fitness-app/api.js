const express = require('express'); 
const app = express();
const fs = require('fs');
const cors = require('cors');
//new code 
const users = require('./services/userservices');
const body = require('body-parser');


app.use(cors());
app.use(body.json());



app.post('/criarUsuario', (req, res) => {
    const {name, password} = req.body;
    if(name && password) {
        users.criarUsuario(name, password);
        res.status(200).send("Usuário criado com sucesso");
    }
    else {
        res.status(400).send("Usuário ou senha não informados");
    }
});

app.post('/login', async (req, res) => {
    const {name, password} = req.body;
    if(name && password) {
        const resultado = users.validarUsuario(name, password);
        if(resultado) {
            res.status(200).send("Usuário logado com sucesso");
        }else {
            res.status(400).send("Usuário ou senha inválidos");
        }
    }
    else {
        res.status(400).send("Usuário ou senha não informados");
    }
});

app.post('/addExercise', (req, res) => {
    const { exercise } = req.body;
    console.log("Received addExercise request:", exercise);
    const result = users.adicionarExercicio(exercise);
    if (result) {
        res.status(200).send("Exercise added successfully");
    } else {
        res.status(400).send("Failed to add exercise");
    }
});

app.get('/exercises/:date', (req, res) => {
    const { date } = req.params;
    try {
        const exercises = users.getExercisesByDate(date);
        if (exercises.length > 0) {
            res.status(200).json(exercises);
        } else {
            res.status(404).send("No exercises found for the specified date");
        }
    } catch (error) {
        console.error("Error fetching exercises:", error);
        res.status(500).send("Internal server error");
    }
});

app.listen(8080);

