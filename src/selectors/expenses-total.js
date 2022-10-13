import getVisibleExpenses from "./expenses";

const getExpensesTotal = (expenses) => {    
    return expenses.reduce((acc, current) => acc + current.amount , 0)
}

export default getExpensesTotal