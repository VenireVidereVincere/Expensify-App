import React from "react";
import { startLogin } from "../actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const LoginPage = ( ) => {
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (    
        <div>
        <p>Login by clicking the button below!</p>
        <button id="login" onClick={ () => {
            dispatch(startLogin(navigate,location.pathname, dispatch))
        } }>Login</button>
        </div>
    )
}



export default LoginPage