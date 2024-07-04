const fs = require('fs');
const exercisesFile = fs.readFileSync('exercise.json', 'utf-8');

exports.criarUsuario = (usuario, senha) => {
    const usuarios = JSON.parse(fs.readFileSync('users.json', 'utf-8'));

    const newUser = {
        name:usuario,
        password:senha
    };
    usuarios.push(newUser);
    fs.writeFileSync('users.json', JSON.stringify(usuarios));
    
}

exports.validarUsuario = (usuario, senha) => {
    const usuarios = JSON.parse(fs.readFileSync('users.json', 'utf-8'));
    const user = usuarios.find(user => user.name === usuario && user.password === senha);
    if(!user || user.password !== senha ){
        return false;
    }
    return true;
}

exports.listarUsuarios = () => {
    const usuarios = JSON.parse(fs.readFileSync('users.json', 'utf-8'));
    return usuarios;
}

exports.adicionarExercicio = (exercicio) => {
    const exercises = JSON.parse(fs.readFileSync('exercise.json', 'utf-8'));
    exercises.push(exercicio);
    fs.writeFileSync('exercise.json', JSON.stringify(exercises, null, 2));
    return true;
};

exports.getExercisesByDate = (date) => {
    const exercicios = JSON.parse(exercisesFile);
    const found = exercicios.filter(exercicio => exercicio.date === date);
    return found;
};
