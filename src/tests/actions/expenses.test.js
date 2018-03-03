import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should set up edit expense action object', () => {
    const action = editExpense('123abc', { description: 'rent', amount: 4500 });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'rent',
            amount: 4500
        }
    });
});

test('should set up add expense action object with provide values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 7000,
        createdAt: 1000,
        note: 'rent for Feb'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }

    })

});

test('should set up add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }
    })
});
