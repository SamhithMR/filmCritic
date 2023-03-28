import axios from 'axios';

const BASE_URL = `https://api.themoviedb.org/3`;
const TOKEN = process.env.REACT_APP_API_KEY 

const headers = {
    Authorization: `Bearer ${TOKEN}`
};

async function fetchDataFromApi(url, params="") {
    try {
        const { data } = await axios.get(BASE_URL + url, { headers, params });
        return data;
    } catch (err) {
        return err;
    }
}

export default fetchDataFromApi;

