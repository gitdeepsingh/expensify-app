import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENTAL':
            const incBy = typeof action.incBy === 'number' ? action.incBy : 1;
            return {
                count: state.count + incBy
            };
        case 'DECREMENTAL':
            const decBy = typeof action.decBy === 'number' ? action.decBy : 1;
            return {
                count: state.count - decBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: state.count = 0
            }
        default:
            return state;
    }
})

const unsubscribe = store.subscribe(() => {
console.log(store.getState())    
});

store.dispatch({
    type: 'INCREMENTAL',
    incBy: 5
})

// unsubscribe();    

store.dispatch({
    type: 'INCREMENTAL'
})

store.dispatch({
    type: 'RESET'
})

store.dispatch({
    type: 'DECREMENTAL',
    decBy: 10
})

store.dispatch({
    type: 'SET',
    count: 101
})