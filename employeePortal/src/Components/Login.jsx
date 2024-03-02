import React, { useState, useContext } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LoginDetailsContext } from '../Context/LoginDetailsProvider';

const Login = () => {
    const [email, setEmail] = useState('');
    const [id, setId] = useState(''); 
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/login', { email, id, password });
            console.log(response.data);
            // navigate(`/employee/${id}`); // Redirect to employee details page with ID
            navigate(`/details/${id}`);
        } catch (error) {
            console.error(error);
            setError('Invalid email, ID, or password');
        }
    };

    return (
        <Container maxWidth="xs">
            <Typography variant="h4" align="center">Login</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="ID"
                    type='number'
                    variant="outlined"
                    margin="normal"
                    value={id}
                    onChange={(e) => setId(e.target.value)} // Handle ID change
                />
                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <Typography color="error">{error}</Typography>}
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Login
                </Button>
            </form>
        </Container>
    );
};

export default Login;