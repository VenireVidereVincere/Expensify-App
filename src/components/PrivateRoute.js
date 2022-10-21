import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
import Header from "./Header"

function PrivateRoute({children}) {    
    const user = useSelector((state) => state.auth)
    if(!user.uid){
        return <Navigate to="/" />
    }
    return (
        <div>
            <Header />
            {children}
        </div>
    )
    
}   

export default PrivateRoute