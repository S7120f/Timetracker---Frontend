// src/services/timeEntryService.ts

export async function checkIn(userId: number, categoryId: number) {
    const response = await fetch(`http://localhost:8080/timeentry/checkin/${userId}/${categoryId}`, {
      method: 'POST',
      credentials: 'include'
    });
    if (!response.ok) throw new Error('Kunde inte checka in');
    return response.json();
  }
  
  export async function checkOut(userId: number) {
    const response = await fetch(`http://localhost:8080/timeentry/checkout/${userId}`, {
      method: 'POST',
      credentials: 'include'
    });
    if (!response.ok) throw new Error('Kunde inte checka ut');
    return response.json();
  }
  
  export async function getWeeklySummary(userId: number) {
    const response = await fetch(`http://localhost:8080/timeentry/weekly-summery/${userId}`, {
      credentials: 'include'
    });
    if (!response.ok) throw new Error('Kunde inte hämta statistik');
    return response.json();
  }