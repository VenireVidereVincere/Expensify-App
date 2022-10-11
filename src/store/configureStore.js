import { configureStore, combineReducers } from "@reduxjs/toolkit"
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'

// store creation
const rootReducer = combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
})

export default configureStore({reducer: rootReducer})
