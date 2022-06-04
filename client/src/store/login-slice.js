import axios from 'axios'
import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState: { isLoggedIn: false, user: null },
    reducers: {
        loginUser(state, action) {
            state.isLoggedIn = true
            state.user = action.payload
        },
        logoutUser(state) {
            state.isLoggedIn = false
            state.user = null
        }
    }
})


export const login = () => async (dispatch) => {
    try {
        const res = await axios.get("http://localhost:8000/auth/login/success", { withCredentials: true });
        if (res.data.success) {
            dispatch(loginSlice.actions.loginUser(res.data.user))
        }
    } catch (error) {
        throw new Error('validation failed!')
    }
}

export const logout = () => async (dispatch) => {
    try {
        await axios.get("http://localhost:8000/auth/logout", { withCredentials: true });
        dispatch(loginSlice.actions.logoutUser())
        window.location.href = 'http://localhost:8000'
    } catch (error) {
        throw new Error('can not logout!')
    }

}



export const loginActions = loginSlice.actions;

export default loginSlice