import React from "react";
import { startLogin } from "../actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const LoginPage = ( ) => {
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (    
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Expensify</h1>
                <p>It's time to get your expenses under control</p>
                <button className="button" id="login" onClick={ () => {
                    dispatch(startLogin(navigate,location.pathname, dispatch))
                } }>Login with Google</button>
            </div>
        </div>
    )
}



export default LoginPage