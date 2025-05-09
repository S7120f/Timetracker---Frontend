import CheckInOut from "./CheckInOut";
import { getCategories } from "../services/categoryService";
import type { CategoryType } from "../types/CategoryType";
import CategoryForm from "./CategoryForm";
import { useEffect, useState } from "react";
import WeeklySummary from "./WeeklySummary";

function CategoryPage() {
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
    }, []);


    return (
        <>
            <h2>Kategorier</h2>
            <CategoryForm categories={categories} setCategories={setCategories} />
            <h2>Tidsrapportering</h2>
            <CheckInOut categories={categories} />
            <h2>Statistik</h2>
            <WeeklySummary />
        </>
        )
}


export default CategoryPage