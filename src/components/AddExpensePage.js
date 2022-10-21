import React from "react";
import ExpenseForm from './ExpenseForm'
import { startAddExpense } from "../actions/expenses";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import moment from "moment";

const AddExpensePage = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const defaultState = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment()
    }
    return (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            expense={defaultState}
            url = {location.pathname}
            onSubmit={(expense) => {
                dispatch(startAddExpense(expense))
                navigate('/dashboard')
            }}
        />
    </div>
    )
}
export default AddExpensePage