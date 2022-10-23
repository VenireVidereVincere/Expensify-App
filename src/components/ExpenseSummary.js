import React from "react";
import { useSelector } from "react-redux";
import getVisibleExpenses from "../selectors/expenses";
import getExpensesTotal from "../selectors/expenses-total";
import numeral from "numeral";
import { Link } from "react-router-dom";

const ExpenseSummary = () => {
    const filters = useSelector((state) => state.filters)
    const expenses = useSelector((state) => state.expenses)
    const visibleExpenses = getVisibleExpenses(expenses, filters)
    
    return (
        <div className="page-header">
            <div className="content-container">
                {visibleExpenses.length === 1 
                    ? <h1 className="page-header__title">Viewing <span>{visibleExpenses.length}</span> expense totalling <span>{numeral(getExpensesTotal(visibleExpenses)/100).format('$0,0.00')}</span></h1> 
                    : visibleExpenses.length > 1 || visibleExpenses.length === 0
                        ? <h1 className="page-header__title">Viewing <span>{visibleExpenses.length}</span> expenses totalling <span>{numeral(getExpensesTotal(visibleExpenses)/100).format('$0,0.00')}</span></h1> 
                        : undefined
                    }
                <div className="page-header__actions">
                    <Link className="button" to="/create">
                        Add Expense
                    </Link>
                </div>
            </div>            
        </div>
    )
}

export default ExpenseSummary