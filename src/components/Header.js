import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { startLogout } from "../actions/auth"
const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
    <header>
        <h1>Expensify</h1>
        <div>
            <NavLink to={'/dashboard'} 
            className={({isActive}) => isActive ? 'is-active' : undefined}
            end
            >Home</NavLink>
            <NavLink to={'/create'}
            className={({isActive}) => isActive ? 'is-active' : undefined}
            >Create Expense</NavLink>
            <NavLink to={'/help'}
            className={({isActive}) => isActive ? 'is-active' : undefined}
            >Help</NavLink>
            <button onClick={() => {
                dispatch(startLogout(navigate, dispatch))
            }}>Logout</button>
        </div>        
    </header>
    )
}

export default Header