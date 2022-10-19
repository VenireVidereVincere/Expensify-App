import { firebaseDb } from '../firebase/firebase'
import { push, ref, set, update, get } from 'firebase/database'

// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense: {
        ...expense
    }                   
})
// REMOVE_EXPENSE
export const removeExpense = ({id}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }  
}

//EDIT_EXPENSE
export const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
}
//START_ADD_EXPENSE
export const startAddExpense = ({
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0
    } = {}
        ) => {
        return async (dispatch) => {
            const expense = { 
                description,
                note,
                amount,
                createdAt
            }
            const newRef = await push(ref(firebaseDb, "expenses"))
            set(newRef,{
                ...expense
            })
            dispatch(addExpense({
                id: newRef.key,
                ...expense
            }))                
}    
}

//START_REMOVE_EXPENSE
export const startRemoveExpense = ({id}) => {
    return async (dispatch) => {
        const refToDelete = ref(firebaseDb, `expenses/${id}`)
        await set(refToDelete,null)
        dispatch(removeExpense({id}))
    }
}

//START_EDIT_EXPENSE
export const startEditExpense = (id, updates = {}) => {
    return async (dispatch) => {
        const refToUpdate = ref(firebaseDb, `expenses/${id}`)
        await update(refToUpdate,{
            ...updates
        })
        dispatch(editExpense(id, updates))
    }
}

//START_SET_EXPENSES
export const startSetExpenses = () => {
    return async (dispatch) => {
        const dbRef = ref(firebaseDb,"expenses")
        const expenses = []
        const snapshot = await get(dbRef)
        if(!snapshot.exists()) {

        }
        snapshot.forEach((child) => {
            expenses.push({
                id: child.key,
                ...child.val()
            })
        })
        console.log(expenses)
        dispatch(setExpenses(expenses))
    }
}

//SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses: {
        ...expenses
    }
})