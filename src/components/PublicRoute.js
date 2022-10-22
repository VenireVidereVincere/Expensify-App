import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ({children}) {
    const user = useSelector((state) => state.auth)
    if(!!user.uid) {
        return <Navigate to="/dashboard" />
    }
    return (
        <div>
            {children}
        </div>
    )
    
}
