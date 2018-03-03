import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No Expenses</p>
            ) : (
                    props.expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} {...expense} /> 
                })
            )
        }
    </div>
);

const mapStateToProp = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
}

export default connect(mapStateToProp)(ExpenseList);
