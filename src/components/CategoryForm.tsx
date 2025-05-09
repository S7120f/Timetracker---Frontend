import React, { useEffect, useState } from "react"
import createCategory, { getCategories, updateCategoryName } from '../services/categoryService'
import type { CategoryType } from "../types/CategoryType";


type Props = {
    categories: CategoryType[];
    setCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
  };


function CategoryForm({ categories, setCategories }: Props) {

    const [categoryName, setCategoryName] = useState("");
    // const [categories, setCategories] = useState<CategoryType[]>([]);
    const [categoryToEdit, setCategoryToEdit] = useState<CategoryType | null>(null);
    const [editCategoryName, setEditCategoryName] = useState("");

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

    const handleEditClick = (category: CategoryType) => {
        setCategoryToEdit(category);
        setEditCategoryName(category.name);
    };

    const handleEditSave = async () => {
        if (!categoryToEdit) return;
        try {
            const updatedCategory = await updateCategoryName(categoryToEdit.id, editCategoryName);
            setCategories(prev => 
                prev.map(cat => 
                    cat.id === updatedCategory.id
                    ? updatedCategory
                    : cat
                )
            );
            setCategoryToEdit(null);
        } catch (error: any) {
            alert(error.message);
        }
    };




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
                <li key={index}>{categoryItem.name}
                <button onClick={() => handleEditClick(categoryItem)}>Redigera</button>
                </li> 
            ))}
        </ul>

        {categoryToEdit && (
            <div>
                <h3>Redigera kategori</h3>
                <input 
                type="text"
                value={editCategoryName}
                onChange={e => setEditCategoryName(e.target.value)}
                />
            <div>
                <button onClick={handleEditSave}>Spara</button>
                <button onClick={() => setCategoryToEdit(null)}>Avbryt</button>

            </div>
            </div>
        )}


        </>
    )

}

export default CategoryForm