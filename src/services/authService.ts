import type { User, LoginRequest } from '../types/User';


const API_URL = 'http://localhost:8080';

export default async function login(loginRequest: LoginRequest): Promise<User> {
    const response = await fetch(`${API_URL}/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginRequest),
        credentials: 'include'
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    return response.json();
    
}

export async function register(registerRequest: { username: string; password: string}) {
    const response = await fetch(`${API_URL}/user/createUser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerRequest),
        credentials: 'include'
    });

    if (!response.ok) throw new Error("Kunde inte skapa konto");
    return response.json();
    }

