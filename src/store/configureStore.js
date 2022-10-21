import { configureStore, combineReducers } from "@reduxjs/toolkit"
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'
import authReducer from "../reducers/auth"

// store creation
const rootReducer = combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
    auth: authReducer
})

export default configureStore({reducer: rootReducer})
