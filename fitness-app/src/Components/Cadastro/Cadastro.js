import React, { useState } from "react";
import './Cadastro.css'; // Ensure this path is correct

const Cadastro = () => {
    const [formData, setFormData] = useState({
        name: '',
        password: ''
    });

    const [feedback, setFeedback] = useState({
        message: '',
        type: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/criarUsuario", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setFeedback({ message: "Cadastrado com sucesso", type: "success" });
            } else {
                const erro = await response.json();
                setFeedback({ message: erro.message, type: "error" });
            }
            setFormData({ name: '', password: '' });
        } catch (error) {
            console.log(error);
            setFeedback({ message: "Erro ao cadastrar", type: "error" });
        }
    };

    return (
        <div className="container">
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="User"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Cadastrar</button>
            </form>
            {feedback.message && <div className={feedback.type}>{feedback.message}</div>}
        </div>
    );
};

export default Cadastro;
