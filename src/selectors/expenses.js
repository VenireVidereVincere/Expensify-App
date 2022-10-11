import moment from "moment"
// Get visible expenses
const getVisibleExpenses = (expenses, {startDate, endDate, sortBy, text}) => {
    return expenses.filter((expense) => {
        const createdMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? moment(startDate).isSameOrBefore(createdMoment, "day") : true
        const endDateMatch = endDate ? moment(endDate).isSameOrAfter(createdMoment, "day") : true
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'smallToLarge') {
            return a.amount > b.amount ? 1 : -1
        } else if (sortBy === 'largeToSmall'){
            return a.amount < b.amount ? 1 : -1
        }

    })
}

export default getVisibleExpenses