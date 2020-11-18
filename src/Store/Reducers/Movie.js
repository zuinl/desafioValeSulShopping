import { GET_MOVIES } from '../Actions/ActionTypes'

const initialState = {
    movies: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer