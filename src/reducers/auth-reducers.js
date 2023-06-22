const user = JSON.parse(localStorage.getItem('user'))

const initialeState = user 
?{isLogged : true, user}
:{isLogged : false} 

const authReducer = (state = initialeState, action ) => {
    switch(action.type){
        case "LOGIN_SUCCESS" : 
        return{
            ...state,
            isLogged : true,
            user : action.payload
        }

        case "LOGIN_ERROR" : 
        return{
            ...state,
            isLogged : false,
            error : action.payload
        }

        case "LOGOUT" : 
        return{
            ...state,
            isLogged : false,
            user : undefined
        }

        default :
         return state

    }
}

export default authReducer