import { createStore } from 'redux';

const incrementCount = ({ incBy =1 } = {}) => ({
    type: 'INCREMENTAL',
    incBy
});

const decrementCount = ({ decBy =1 } = {}) => ({
    type: 'DECREMENTAL',
    decBy
});

const setCount = ({ count }={}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENTAL':
            return {
                count: state.count + action.incBy
            };
        case 'DECREMENTAL':
            return {
                count: state.count - action.decBy
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

store.dispatch(incrementCount({incBy: 5}))

// unsubscribe();    

store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({decBy: 10}))

store.dispatch(setCount({count: 101}))