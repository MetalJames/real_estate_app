import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '7f0834bd79msh480b4f1ef5f113dp16b8a6jsna92d72f2b089'
        }
    });

    return data;
}