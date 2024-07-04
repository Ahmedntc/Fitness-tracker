import React, { useState } from 'react';
import axios from 'axios';
import './Exercicio.css';  // Import the CSS file

const Exercise = () => {
    const [exerciseName, setExerciseName] = useState('');
    const [reps, setReps] = useState('');
    const [sets, setSets] = useState('');
    const [weight, setWeight] = useState('');
    const [date, setDate] = useState('');
    const [message, setMessage] = useState('');

    const handleAddExercise = async () => {
        if (!exerciseName || !reps || !sets || !weight || !date) {
            setMessage('Please fill out all fields.');
            return;
        }

        const exercise = {
            name: exerciseName,
            reps: parseInt(reps, 10),
            sets: parseInt(sets, 10),
            weight: parseFloat(weight),
            date
        };

        try {
            const response = await axios.post('http://localhost:8080/addExercise', { exercise });
            setMessage(response.data);
        } catch (error) {
            setMessage('Failed to add exercise');
        }
    };

    return (
        <div className="exercise-container">
            <h2>Add Exercise</h2>
            <input
                type="text"
                value={exerciseName}
                onChange={(e) => setExerciseName(e.target.value)}
                placeholder="Exercise Name"
            />
            <input
                type="number"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                placeholder="Reps"
            />
            <input
                type="number"
                value={sets}
                onChange={(e) => setSets(e.target.value)}
                placeholder="Sets"
            />
            <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Weight (kg)"
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <button onClick={handleAddExercise}>Add Exercise</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Exercise;
