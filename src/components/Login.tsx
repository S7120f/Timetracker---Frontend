import React, { useState } from "react";
import login from '../services/authService'

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //Den här funktionen körs när man klickar på kanppen
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault(); // hindrar att sidan laddas om 
        
        // Anropa login-tjänste
        login({ username, password })
            .then(user => {
                console.log('Inloggad användare: ', user);
            })
            .catch(error => {
                //hantera fel
                console.error('Fel vid inloggning: ', error);
                alert('Felaktig användarnamn eller lösenord');
            });
    }


    return (
        <div>
            <div>Logga in</div>
            <form onSubmit={handleLogin}>
                <input 
                type="text" 
                placeholder="Användarnamn"
                value={username}
                onChange={e => setUsername(e.target.value)}
                />
                <input 
                type="text" 
                placeholder="Lösenord" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
                <button>Logga in</button>
            </form>
        </div>
    )
}

export default Login;