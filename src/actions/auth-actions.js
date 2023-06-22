const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const LOGIN_ERROR = "LOGIN_ERROR"
const LOGOUT = "LOGOUT"

const loginSuccess = (data) => (dispatch) => {
    dispatch({
        type : LOGIN_SUCCESS,
        payload : data
    })
}

const loginError = (data) => (dispatch) => {
    dispatch({
        type : LOGIN_ERROR,
        payload : data
    })
}

const logout = () => (dispatch) => {
    dispatch({
        type : LOGOUT,
    })
}

export {
    loginError,
    loginSuccess,
    logout
}