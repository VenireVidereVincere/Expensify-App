import React from 'react';
import * as ReactDOM from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import store from './store/configureStore'
import { addExpense, removeExpense, editExpense } from './actions/expenses'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import { Provider } from 'react-redux'

const expenseOne = store.dispatch(addExpense({
    description: "Rent",
    amount: 4400,
    note: "Too high",
    createdAt: 1500
}))
console.log("app.js is loading")
const expenseTwo = store.dispatch(addExpense({
    description: "Coffee",
    amount: 50,
    note: "Way too high",
    createdAt: 900
}))

const expenseThree = store.dispatch(addExpense({
    description: "Water Bill",
    amount: 400,
    note: "Way too high",
    createdAt: 300
}))

const expenseFour = store.dispatch(addExpense({
    description: "Electricity Bill",
    amount: 350,
    note: "Way too high",
    createdAt: 400
}))

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container); 
root.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>
    )