import React from "react";
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import { useDispatch, useSelector } from "react-redux";

const ExpenseDashboardPage = () => {
    const filters = useSelector((state) => state.filters)
    const dispatch = useDispatch()

    return (
        <div>
            <ExpenseListFilters 
            filters = {filters}
            dispatch = {dispatch}
            />
            <ExpenseList></ExpenseList>
        </div>
    )
}

export default ExpenseDashboardPage