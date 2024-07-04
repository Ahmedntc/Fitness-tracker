import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Ensure this path is correct

function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, password })
            });

            if (response.ok) {
                //print it worked
                navigate('/');
            } else {
                setError('Invalid credentials');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <input
                type="text"
                placeholder="User"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            {error && <p>{error}</p>}
        </div>
    );
}

export default Login;
