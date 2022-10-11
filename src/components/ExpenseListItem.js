import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { removeExpense } from '../actions/expenses'
import { Link } from "react-router-dom"
export default (props) => {
    const dispatch = useDispatch()
    
    return (
        <div>
            <Link to={`/edit/${props.id}`}>
                <h3>{props.description}</h3>
            </Link>            
            <p>${props.amount} - {props.createdAt}</p>
            <button onClick={(e) => {
                dispatch(removeExpense({id:props.id}))
            }}>Remove Item</button>
        </div>
    )
}