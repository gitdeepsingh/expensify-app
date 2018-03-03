import React from 'react';
import { connect } from 'react-redux';


const ExpenseList = (props) => (
    <div>
        <h1>Expensse List</h1>
        {props.expenses.length}
        {props.filters.text}
    </div>
);

const mapStateToProp = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    };
}

export default connect(mapStateToProp)(ExpenseList);
