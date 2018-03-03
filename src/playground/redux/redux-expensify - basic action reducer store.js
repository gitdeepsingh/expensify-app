import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'

//Action Generators

// ADD_EXPENSE

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});


//Expenses reducer

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': {
            return state.concat(action.expense)
        }
        default:
            return state
    }
};

//Filters reducer

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

// Store

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(addExpense({ description: 'rent', amount: 1000 }))

const demoState = {
    expenses: [{
        id: 'dynamicid',
        description: 'January Rent',
        note: 'This was my last rent payment for the address',
        amount: 4500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}