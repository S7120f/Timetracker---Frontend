import type { User, LoginRequest } from '../types/User';

const API_URL = 'http://localhost:8080';

async function login(loginRequest: LoginRequest): Promise<User> {
    const response = await fetch(`${API_URL}/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginRequest),
        // credentials: 'include'
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    return response.json();
    
}

export default login