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

// REMOVE_EXPENSE

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_TEXT_FILTER

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text

});

// SORT_BY_AMOUNT

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});

// SORT_BY_DATE

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});

//SET_START_DATE

const setStartDate = startDate => ({
    type: 'SET_START_DATE',
    startDate
})

//SET_END_DATE

const setEndDate = endDate => ({
    type: 'SET_END_DATE',
    endDate
})

//Expenses reducer

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': {
            return [
                ...state,
                action.expense
            ];
        }
        case 'REMOVE_EXPENSE': {
            return state.filter(({ id }) => id !== action.id);
        }
        case 'EDIT_EXPENSE': {
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense
                }
            });
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
        case 'SET_TEXT_FILTER': {
            return {
                ...state,
                text: action.text
            }
        }
        case 'SORT_BY_AMOUNT': {
            return {
                ...state,
                sortBy: 'amount'
            }
        }
        case 'SORT_BY_DATE': {
            return {
                ...state,
                sortBy: 'date'
            }
        }
        case 'SET_START_DATE':{
            return {
                ...state,
                startDate: action.startDate
            }
        }
        case 'SET_END_DATE':{
            return {
                ...state,
                endDate: action.endDate
            }
        }
        default:
            return state
    }
}

//timestamps (milliseconds)
// timestamp 0 equialentto January 1st 1970 (unix epoch)
// -2100 , -1000 , 0 , 1400, 35400 (35.4 seconds after Jan 1, 1970) 

//get visible expenses

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if(sortBy === 'amount') {
            return a.amount < b.amount ? 1: -1;
        }
    });
}

// Store

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 1000, createdAt: -11000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 250, createdAt: -1000 }))

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

// store.dispatch(setTextFilter('e'))
// store.dispatch(setTextFilter())

store.dispatch(sortByAmount('amount'))
// store.dispatch(sortByDate('date'))

// store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(999))

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
