import React from "react";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage"
import LoginPage from "../components/LoginPage";
import PrivateRoute from "../components/PrivateRoute"

import {
    Route,
    Routes,
    BrowserRouter
  } from "react-router-dom";
  
// PrivateRoute is a component which checks for a logged in user and redirects to the login page in case
// no user is found. 
const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Routes>
            <Route 
            path="/"
            element={<LoginPage />}
            />            
            <Route 
            path="/dashboard"
            element= {
                <PrivateRoute>
                    <ExpenseDashboardPage />
                </PrivateRoute>
            }
            />
            <Route
            path='/create'
            element= {
                <PrivateRoute>
                    <AddExpensePage />
                </PrivateRoute>
            }
            />
            <Route 
            path='/edit/:id'
            element={
                <PrivateRoute>
                    <EditExpensePage />
                </PrivateRoute>
            }
            />
            <Route 
            path='/help'
            element={
                <PrivateRoute>
                    <HelpPage />
                </PrivateRoute>
            }
            />
            <Route 
            path="*"
            element={
                <PrivateRoute>
                    <NotFoundPage />
                </PrivateRoute>
            }
            />
        </Routes>
    </div>
    </BrowserRouter>
)

export default AppRouter
