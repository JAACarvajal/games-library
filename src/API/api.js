import axios from "axios";

const API = axios.create({
    baseURL: `https://free-to-play-games-database.p.rapidapi.com/api/`,
    headers: {
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': 'e8a17edf7bmsha6ec5d5e3f335e9p13a99ejsn6e3e491a95fd'
    }
});


export const getList = async function () {
    API.get('/games').then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });
}