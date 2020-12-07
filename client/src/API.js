const API_URL = 'http://localhost:1337';

export async function listAllOffers() {
    const response = await fetch(`${API_URL}/offers`);
    return response.json();
}