import  { useEffect, useState } from "react";
import { getWeeklySummary } from "../services/timeEntryService";

interface Props {
    refresh: number;
}

function WeeklySummary({ refresh }: Props) {
    const [summary, setSummary] = useState<{ [category: string]: string }>({});
    
    //hämta statistik när komponenten laddas
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user")!);
        const userId = user.id;
    
        async function fetchSummary() {
            try {
                const data = await getWeeklySummary(userId);
                setSummary(data);
            } catch (error: any) {
                alert(error.message);
            }
        }
    
        fetchSummary();
    }, [refresh]);

    return (
        <div>
            <h3>Veckosammanfattning</h3>
            {Object.keys(summary).length === 0 ? (
                <div> Ingen statistik tillgänlig för denna vecka.</div>
            ) : (
                <ul>
                    {Object.entries(summary).map(([category, time]) => (
                        <li key={category}>
                            {category}: {time}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
    
export default WeeklySummary;