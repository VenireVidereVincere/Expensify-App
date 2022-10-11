import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <div>
            <NavLink to={'/'} 
            className={({isActive}) => isActive ? 'is-active' : undefined}
            end
            >Home</NavLink>
            <NavLink to={'/create'}
            className={({isActive}) => isActive ? 'is-active' : undefined}
            >Create Expense</NavLink>
            <NavLink to={'/help'}
            className={({isActive}) => isActive ? 'is-active' : undefined}
            >Help</NavLink>
        </div>        
    </header>
)

export default Header