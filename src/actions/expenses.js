const uuidv1 = require('uuid/v1');
import database from '../firebase/firebase';

//SYNCHRONOUS ACTIONS

/* 
component calls action generator
action generator returns an object
component dispatches object
redux store changes
*/

// ASYNCHRONOUS CODE

/*
component calls action generator
action generator returns function
component dispatches function (?) (requires redux middleware. Redux doesn't support dispatching functions out-of-the-box) : https://github.com/reduxjs/redux-thunk
function runs (has the ability to dispatch other actions and whatever it wants)
*/

// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0 
        } = expenseData;
        const expense = {description, note, amount, createdAt};
        
        return database.ref(`users/${uid}/expenses`).push(expense)
            .then((ref) => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }));
            });
    }
}

// REMOVE_EXPENSE
export const removeExpense = ( { id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ( { id } = {}) => {
    return (dispatch, setState) => {
        const uid = setState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`)
            .remove()
            .then(() => {
                dispatch(removeExpense({ id }))
            })
    }
};

// EDIT_EXPENSE

export const editExpense = ( id, updates ) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
    }
);

export const startEditExpense = (id, updates) => {
    return (dispatch, setState) => {
        const uid = setState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`)
        .update(updates)
        .then(() => {
            dispatch(editExpense(id, updates))
        })
    }
}

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch, setState) => {
        const uid = setState().auth.uid;
        const expenses = [];
        return database
            .ref(`users/${uid}/expenses`)
            .once('value')
            .then((snapshot) => {
                
                snapshot.forEach((childSnapshot) => {
                    const expense = {
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    }
                    expenses.push(expense);
                });

                dispatch(setExpenses(expenses));
            });
    }
}