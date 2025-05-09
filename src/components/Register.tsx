import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";

function Register() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await register({ username, password }); // anropa service-funktionen
            alert("Konto Skapat!")
            navigate("/")
        } catch (error: any) {
            alert(error.message);
        }
    };


    return (
        <div>
            <h2>Skapa konto</h2>
            <form onSubmit={handleRegister}>
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
                <button type="submit">Registerara</button>
            </form>
        </div>
    );


}

export default Register;