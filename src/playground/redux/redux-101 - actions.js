import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENTAL':
            return {
                count: state.count + 1
            };
        case 'DECREMENTAL':
            return {
                count: state.count - 1
            };
        case 'RESET':
            return {
                count: state.count = 0
            }
        default:
            return state;
    }
})

console.log(store.getState())

store.dispatch({
    type: 'INCREMENTAL'
})

store.dispatch({
    type: 'INCREMENTAL'
})
console.log(store.getState())


store.dispatch({
    type: 'RESET'
})
console.log(store.getState())

store.dispatch({
    type: 'DECREMENTAL'
})
console.log(store.getState())
