import React from "react"
import { useParams, useNavigate, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import ExpenseForm from './ExpenseForm'
import {startEditExpense, startRemoveExpense} from '../actions/expenses'

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
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>    
                <div className="content-container">
                    <ExpenseForm
                        {...expense}
                        url = {location.pathname}
                        onSubmit={(expense) => {
                            dispatch(startEditExpense(params.id,expense))
                            navigate('/dashboard')
                        }}
                    />
                    <button 
                        className="button button--secondary"
                        onClick={() => {
                            dispatch(startRemoveExpense({id:expense.expense.id}))
                            navigate('/dashboard')
                        }}
                    >Remove Expense</button>
                </div>
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