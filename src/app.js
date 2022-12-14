import React from 'react';
import * as ReactDOM from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import store from './store/configureStore'
import { startSetExpenses } from './actions/expenses'
import { Provider } from 'react-redux'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from './firebase/firebase'
import { login } from './actions/auth';
import LoadingPage from './components/LoadingPage'
const container = document.getElementById('app');
const root = ReactDOM.createRoot(container); 

let hasRendered = false
const renderApp = () => {
  root.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>
    )
    hasRendered = true
}
root.render(
  <LoadingPage />
  )

const auth = getAuth(app);
onAuthStateChanged(auth, user => {
  if(user) {
    console.log("Logged in")
    console.log(user.uid)
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses()).then(() => {
      renderApp()
  })

  } else {
    console.log("Logged out")
    renderApp()
  }
});



