import React from "react"
import { useParams, useNavigate, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import ExpenseForm from './ExpenseForm'
import {startEditExpense} from '../actions/expenses'

const EditExpensePage = () => {    
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    try {
        const expense = useSelector((state) => {
            return {
                expense: state.expenses.find((expense) => {
                    return expense.id === params.id
                })
            }
        })
        return (
            <div>    
                <ExpenseForm
                    {...expense}
                    url = {location.pathname}
                    onSubmit={(expense) => {
                        dispatch(startEditExpense(params.id,expense))
                        navigate('/')
                    }}
                />
            </div>
            )        
    } catch (error) {
        return (
            <div>
                <p>The item you're trying to edit doesn't exist. Please go back to the home page and try again.</p>
            </div>
        )
    }    
}

export default EditExpensePage