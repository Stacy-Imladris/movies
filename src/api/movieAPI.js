import axios from "axios"

const key = '5fce2882'
const instance = axios.create({
    baseURL: 'http://www.omdbapi.com/',
})

export const movieAPI = {
    searchFilmsByTitle: (title, page) => {
        return instance.get(`?apikey=${key}&s=${title}&page=${page}`).then(response => response.data)
    },
}