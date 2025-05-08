
export default async function createCategory(categoryData:{ name:string }) {

    const user = JSON.parse(localStorage.getItem('user')!);
    const userId = user.id

    const response = await fetch(`http://localhost:8080/category/createCategory/${userId}`, {
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

    const response = await fetch(`http://localhost:8080/category/user/${userId}`, {
        credentials: 'include'
    });

    if(!response.ok){
        throw new Error('Kunde inte hämta kategorier');
    }

    return response.json();
    
} 