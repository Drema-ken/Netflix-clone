const key = import.meta.env.VITE_API_KEY;

export const baseUrl = `https://api.themoviedb.org/3`;

const endpoints = {
    popular: `${baseUrl}/movie/popular?api_key=${key}`,
    topRated: `${baseUrl}/movie/top_rated?api_key=${key}`,
    trending: `${baseUrl}/movie/popular?api_key=${key}&language=en-Us&page=2`,
    comedy: `${baseUrl}/movie/search?api_key=${key}&query=Comedy&page=1&include_adult=true`,
    upcoming: `${baseUrl}/movie/upcoming?api_key=${key}`
}

export default endpoints;