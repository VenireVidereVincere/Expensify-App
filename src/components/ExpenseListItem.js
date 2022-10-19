import React from "react"
import { useDispatch } from 'react-redux'
import { startRemoveExpense } from '../actions/expenses'
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
                dispatch(startRemoveExpense({id:props.id}))
            }}>Remove Item</button>
        </div>
    )
}