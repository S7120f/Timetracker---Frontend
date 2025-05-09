import React, { useEffect, useState } from "react";
import { checkIn, checkOut, getActiveTask } from "../services/timeEntryService";
import type { CategoryType  } from "../types/CategoryType";

type Props = {
    categories: CategoryType[];
};


function CheckInOut({ categories } : Props) {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [activeTask, setActiveTask] = useState<any>(null);


    // Hämta userId från localStorage
    const user = JSON.parse(localStorage.getItem("user")!);
    const userId = user.id;

    useEffect(() => {
        async function fetchActiveTask() {
            const task = await getActiveTask(userId);
            console.log("Aktivuppgift från bakcend: " + task.category.name);
            
            if(task) setActiveTask(task)
        }
    fetchActiveTask();
    }, [userId]);

    const handleCheckIn = async (e: React.FormEvent) => {
        e.preventDefault();
        if(!selectedCategory) return;
        try {
            const category = categories.find(cat => cat.name === selectedCategory);
            if(!category) return;
            const task = await checkIn(userId, category.id);
            setActiveTask(task);
        }catch (error: any) {
            alert(error.message);
        }
    }

    const handleCheckOut = async () => {
        try {
          await checkOut(userId);
          setActiveTask(null);
        } catch (error: any) {
          alert(error.message);
        }
      };




      return (
        <div>
          {!activeTask ? (
            <form onSubmit={handleCheckIn}>
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
              >
                <option value="">Välj kategori</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
              <button type="submit" disabled={!selectedCategory}>
                Starta
              </button>
            </form>
          ) : (
            <div>
              <div>Pågående uppgift: {activeTask.category.name}</div>
              <div>Starttid: {new Date(activeTask.startTime).toLocaleTimeString()}</div>
              <button onClick={handleCheckOut}>Avsluta</button>
            </div>
          )}
        </div>
      );
    }


export default CheckInOut;