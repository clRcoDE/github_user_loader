

import { GET_USERS_BEGIN, GET_USERS_SUCCESS, GET_USERS_FAILURE } from '../types'

// import {store} from '../../Pages/App'

/**********************************************__ ACTION CREATOR __**************************************************** */


const loadUsersBegins = () => ({
    type: GET_USERS_BEGIN
})

const loadUsersSuccess = data => ({
    type: GET_USERS_SUCCESS,
    payload: data
})

const loadUsersFailure = error => ({
    type: GET_USERS_FAILURE,
    payload: error
})





/************************************************__ THUNK __******************************************************** */



export const userLoaderHandler = () => {

    return dispatch => {
        dispatch(loadUsersBegins());
        fetch(`https://api.github.com/users`)
            .then(res => res.json())
            .then(data => dispatch(loadUsersSuccess(data)))
            .catch(error => dispatch(loadUsersFailure(error)))
    }
}