
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


export async function updateCategoryName(categoryId: number, newName: string) {
    const response = await fetch(`http://localhost:8080/category/editCategory/${categoryId}`, {
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