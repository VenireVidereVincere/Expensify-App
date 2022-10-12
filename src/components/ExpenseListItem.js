import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { removeExpense } from '../actions/expenses'
import { Link } from "react-router-dom"
import moment from "moment"
import numeral from "numeral"

export default (props) => {
    const dispatch = useDispatch()
    
    return (
        <div>
            <Link to={`/edit/${props.id}`}>
                <h3>{props.description}</h3>
            </Link>            
            <p>
            {numeral(props.amount / 100).format('$0,0.00')} 
             -  
            {moment(props.createdAt).format('Do MMMM YYYY')}
            </p>
            <button onClick={(e) => {
                dispatch(removeExpense({id:props.id}))
            }}>Remove Item</button>
        </div>
    )
}