import { GET_MOVIES } from './ActionTypes'

import axios from 'axios'

import { server } from '../../server'

export const getMovies = (name, year, genre, onlyFeatured) => {
    return dispatch => {
        axios.get(`${server}/valesulmovies-api/getMovies.php?name=${name}&year_publication=${year}&genre=${genre}&onlyFeatured=${onlyFeatured}`)
        .then(response => {
            let movies = response.data

            dispatch(setMovies(movies))
        })
        .catch(err => {
            console.error(err)
    
            alert('Houve um erro ao buscar os filmes.')
        })
    }
}

const setMovies = movies => {
    return {
        type: GET_MOVIES,
        payload: movies
    }
}