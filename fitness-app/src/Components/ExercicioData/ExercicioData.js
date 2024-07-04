import React, { useState } from 'react';
import axios from 'axios';
import './ExData.css';  // Import the CSS file

const ExerciseByDate = () => {
    const [date, setDate] = useState('');
    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleFetchExercises = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch(`http://localhost:8080/exercises/${date}`);
            const data = await response.json();
            setExercises(data);
        } catch (error) {
            setError('Failed to fetch exercises');
            //show error
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="exercise-by-date-container">
            <h2>Visualizar Treino</h2>
            <input 
                type="date" 
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
                placeholder="Selecione uma data" 
            />
            <button onClick={handleFetchExercises} disabled={!date}>Buscar Exercícios</button>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ul>
                {exercises.map((exercise, index) => (
                    <li key={index}>
                        <p>Nome: {exercise.name}</p>
                        <p>Reps: {exercise.reps}</p>
                        <p>Sets: {exercise.sets}</p>
                        <p>Weight: {exercise.weight} kg</p>
                        <p>Date: {exercise.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExerciseByDate;
