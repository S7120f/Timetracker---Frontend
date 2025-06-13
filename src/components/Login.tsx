import React, { useState } from "react";
import login from '../services/authService'
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    //Den här funktionen körs när man klickar på kanppen
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault(); // hindrar att sidan laddas om 
        
        // Anropa login-tjänste
        login({ username, password })
            .then(user => {
                console.log('Inloggad användare: ', user);
                localStorage.setItem('user', JSON.stringify(user)); // spara användare i localstorage
                navigate('/category'); // Skicka användaren till categorypage
            
            })
            .catch(error => {
                //hantera fel
                console.error('Fel vid inloggning: ', error);
                alert('Felaktig användarnamn eller lösenord');
            });
            
    }


    return (
        <div className="login-page">
            <div className="login-form-container">
                <h2>Logga in</h2>
                <form onSubmit={handleLogin}>
                    <input 
                        type="text" 
                        placeholder="Användarnamn"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Lösenord" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button>Logga in</button>
                </form>
                <div className="register-link">
                    Har du inget konto? <Link to="/register">Registrera dig här</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;