// SET_TEXT_FILTER
export const setTextFilter = (text = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        text
    }
}

// SORT_BY
export const sortBy = (sortBy) => ({
    type: 'SORT_BY',
    sortBy
})

// SET_DATE
export const setStartDate = (date) => ({
    type: 'SET_DATE',
    updates: {startDate: date} 
})
// SET_DATE
export const setEndDate = (date) => ({
    type: 'SET_DATE',
    updates: {endDate: date}
})