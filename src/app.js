import React from 'react';
import * as ReactDOM from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import store from './store/configureStore'
import { startSetExpenses } from './actions/expenses'
import { Provider } from 'react-redux'

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container); 

root.render(
    <p>Loading...</p>
    )
store.dispatch(startSetExpenses()).then(() => {
    root.render(
        <Provider store={store}>
            <AppRouter />
        </Provider>
        )
})
