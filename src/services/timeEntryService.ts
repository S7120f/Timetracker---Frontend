// src/services/timeEntryService.ts

const API_URL = 'http://localhost:8080';

export async function checkIn(userId: number, categoryId: number) {
    const response = await fetch(`${API_URL}/timeentry/checkin/${userId}/${categoryId}`, {
      method: 'POST',
      credentials: 'include'
    });
    if (!response.ok) throw new Error('Kunde inte checka in');
    return response.json();
  }
  
  export async function checkOut(userId: number) {
    const response = await fetch(`${API_URL}/timeentry/checkout/${userId}`, {
      method: 'POST',
      credentials: 'include'
    });
    if (!response.ok) throw new Error('Kunde inte checka ut');
    return response.json();
  }
  
  export async function getWeeklySummary(userId: number) {
    const response = await fetch(`${API_URL}/timeentry/weekly-summery/${userId}`, {
      credentials: 'include'
    });
    if (!response.ok) throw new Error('Kunde inte hämta statistik');
    return response.json();
  }

  export async function getActiveTask(userId:number) {
    const response = await fetch(`${API_URL}/timeentry/activeTask/${userId}`, {
        credentials: 'include'
    });
    if(!response.ok) return null;
        return response.json();
    
  }