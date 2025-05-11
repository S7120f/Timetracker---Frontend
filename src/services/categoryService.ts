const API_URL = 'https://shark-app-blfsd.ondigitalocean.app';

export default async function createCategory(categoryData:{ name:string }) {

    const user = JSON.parse(localStorage.getItem('user')!);
    const userId = user.id

    const response = await fetch(`${API_URL}/category/createCategory/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(categoryData),
        credentials: 'include' // för sessions/cookies
    });

    if(!response.ok) {
        throw new Error('Kunde inte skapa kategori')
    }
    
    return response.json();



}



export async function getCategories() {
    const user = JSON.parse(localStorage.getItem('user')!);
    const userId = user.id

    const response = await fetch(`${API_URL}/category/user/${userId}`, {
        credentials: 'include'
    });

    if(!response.ok){
        throw new Error('Kunde inte hämta kategorier');
    }

    return response.json();
    
} 


export async function updateCategoryName(categoryId: number, newName: string) {
    const response = await fetch(`${API_URL}/category/editCategory/${categoryId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newName }), //Skicka bara namn
        credentials: 'include'
    });

    if (!response.ok) {
        throw new Error('Kunde inte uppdatera kategori')
    }

    return response.json();
    
}

export async function editCategory(categoryId: number, categoryData: { name: string }) {
    const response = await fetch(`${API_URL}/category/editCategory/${categoryId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(categoryData),
        credentials: 'include'
    });

    if(!response.ok){
        throw new Error('Kunde inte uppdatera kategori');
    }

    return response.json();
}