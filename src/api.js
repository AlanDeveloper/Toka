import axios from 'axios';

// JSON server
const baseUrl = 'http://localhost:3001';

export function loadFilms() {
    return axios(`${baseUrl}/films`);
}