import React, { useEffect, useState } from "react"
import createCategory, { getCategories } from '../services/categoryService'
import type { CategoryType } from "../types/CategoryType";



function CategoryForm() {

    const [categoryName, setCategoryName] = useState("");
    const [categories, setCategories] = useState<CategoryType[]>([]);


    useEffect(() => {
        async function fetchCategories() { 
            try {
                const data = await getCategories();
                setCategories(data);
            } catch (error: any) {
                alert(error.message);
            }
        }
        fetchCategories();
    }, []); // [] effekt körs bara en gång när komponenten laddas


    const handleCreateCategory = async (categoryData: { name: string }) => {
        try {
            const newCategory = await createCategory(categoryData);
            setCategories(prev => [...prev, newCategory]); // lägg till direkt i state
        } catch(error: any) {
            alert(error.message);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!categoryName.trim()) return; // skicka inte tomma kategorier 
        //Anropa funktionen som skapar kategorin 
        handleCreateCategory({ name: categoryName});

        // Töm inputfältet efteråt
        setCategoryName("");
    }




    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Create Category</label> 
            <div className="createBar">
            <input 
                type="text" 
                placeholder="Enter category name..."
                value={categoryName}
                onChange={e => setCategoryName(e.target.value)}
                />
            </div>
            <button className="createCategoryBtn">Create</button>
        </form>
        <ul>
            {categories.map((categoryItem, index) => (
                <li key={index}>{categoryItem.name}</li>
            ))}
        </ul>
        </>
    )

}

export default CategoryForm