import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import ExpensesListItem from './ExpenseListItem'
import getVisibleExpenses from "../selectors/expenses";

const ExpenseList = () => {
    const expenses = useSelector((state) => state.expenses)
    const filters = useSelector((state) => state.filters)
    const filteredExpenses = getVisibleExpenses(expenses,filters)
    return (
    <div>
        {filteredExpenses.length > 0 ? <h1>Expense List</h1> : <p>No expenses</p>}
        {filteredExpenses.map((expense) => (
            <ExpensesListItem 
            {...expense}
            key={expense.description}
            />
        ))}
    </div>
    )
}

export default ExpenseList