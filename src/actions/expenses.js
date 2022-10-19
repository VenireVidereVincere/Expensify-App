import { v4 as uuidv4 } from 'uuid'
import { firebaseDb } from '../firebase/firebase'
import { push, ref, set } from 'firebase/database'

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
export const editExpense = (id, updates = {}) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }  
}

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