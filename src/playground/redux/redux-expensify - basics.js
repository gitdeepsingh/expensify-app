import { createStore, combineReducers } from 'redux';

//Expenses reducer

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        default :
            return state
    }
};

//Filters reducer

const filterReducerDefaultState = { 
    text:'',
    sortBy: 'date',
    startDate: undefined, 
    endDate: undefined
}
const filtersReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type) {
        default :
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
console.log(store.getState());

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