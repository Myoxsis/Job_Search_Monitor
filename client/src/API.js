const fetch = require("node-fetch");
const API_URL = 'http://localhost:1338';

async function listAllOffers() {
    const response = await fetch(`${API_URL}/offers`);
    return response.json();
}

async function listTodayOffers() {
    const response = await fetch(`${API_URL}/offers/today`);
    return response.json();
}

module.exports = {
    listAllOffers,
    listTodayOffers
};