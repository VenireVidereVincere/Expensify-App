import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import ExpensesListItem from './ExpenseListItem'
import getVisibleExpenses from "../selectors/expenses";

const ExpenseList = () => {
    const expenses = useSelector((state) => state.expenses)
    const filters = useSelector((state) => state.filters)
    const filteredExpenses = getVisibleExpenses(expenses,filters)
    return (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
            {filteredExpenses.map((expense) => (
                <ExpensesListItem 
                {...expense}
                key={expense.description}
                />
            ))}
            {filteredExpenses.length === 0 ? 
                <div className="list-item list-item--message"> 
                    <span>No Expenses</span>
                </div>
                : undefined}
        </div>
    </div>
    )
}

export default ExpenseList