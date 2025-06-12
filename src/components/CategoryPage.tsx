import CheckInOut from "./CheckInOut";
import { getCategories } from "../services/categoryService";
import type { CategoryType } from "../types/CategoryType";
import CategoryForm from "./CategoryForm";
import { useEffect, useState } from "react";
import WeeklySummary from "./WeeklySummary";
import Logout from "./Logout";

function CategoryPage() {
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [summaryRefresh, setSummaryRefresh] = useState(0);
  
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

    const triggerSummaryRefresh = () => setSummaryRefresh(prev => prev + 1);

    return (
        <div className="category-page">
            <div className="category-section">
                <Logout />
                <h2>Kategorier</h2>
                <CategoryForm categories={categories} setCategories={setCategories} />
            </div>
            <div className="category-section">
                <h2>Tidsrapportering</h2>
                <CheckInOut categories={categories} onCheckInOut={triggerSummaryRefresh} />
            </div>
            <div className="category-section">
                <h2>Statistik</h2>
                <WeeklySummary refresh={summaryRefresh} />
            </div>
        </div>
    )
}

export default CategoryPage