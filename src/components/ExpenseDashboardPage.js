import React from "react";
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import { useDispatch, useSelector } from "react-redux";
import getExpensesTotal from '../selectors/expenses-total'
import ExpenseSummary from "./ExpenseSummary";

const ExpenseDashboardPage = () => {
    const filters = useSelector((state) => state.filters)
    const dispatch = useDispatch()
    return (
        <div>
            <ExpenseSummary />
            <ExpenseListFilters 
            filters = {filters}
            dispatch = {dispatch}
            />
            <ExpenseList></ExpenseList>
        </div>
    )
}

export default ExpenseDashboardPage