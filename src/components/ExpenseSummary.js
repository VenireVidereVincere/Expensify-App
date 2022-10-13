import React from "react";
import { useSelector } from "react-redux";
import getVisibleExpenses from "../selectors/expenses";
import getExpensesTotal from "../selectors/expenses-total";
import numeral from "numeral";

const ExpenseSummary = () => {
    const filters = useSelector((state) => state.filters)
    const expenses = useSelector((state) => state.expenses)
    const visibleExpenses = getVisibleExpenses(expenses, filters)
    
    return (
        <div>
            {visibleExpenses.length === 1 
                ? <p>Viewing {visibleExpenses.length} expense totalling {numeral(getExpensesTotal(visibleExpenses)/100).format('$0,0.00')}  </p> 
                : visibleExpenses.length > 1 
                    ? <p>Viewing {visibleExpenses.length} expenses totalling {numeral(getExpensesTotal(visibleExpenses)/100).format('$0,0.00')}  </p> 
                    : undefined
                }
        </div>
    )
}

export default ExpenseSummary