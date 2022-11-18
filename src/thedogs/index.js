import fetch from "node-fetch";

const urlAPI = 'https://api.thedogapi.com/v1/breeds/?limit=10';

const getDogs = async () => {
    const response = await fetch(urlAPI);
    const data = await response.json();

    console.log(data);
}

getDogs();