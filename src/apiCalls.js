import axios from 'axios'
import {baseUrl} from './api_url'

export const loginCall = async (userCredential, dispatch) => {
    dispatch({type: 'LOGIN_START'})
    try {
        const res = await axios.post(baseUrl +'/auth/login', userCredential);
        dispatch({type: 'LOGIN_SUCCESS', payload: res.data});
    } catch (error) {
        dispatch({type: 'LOGIN_FAILURE', payload: error});
    }
}