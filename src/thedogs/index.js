import fetch from "node-fetch";

const urlAPI = 'https://api.thecatapi.com/v1/images/search?limit=3';

const getDogs = async () => {
    const response = await fetch(urlAPI);
    const data = await response.json();

    console.log(data);
}

getDogs();