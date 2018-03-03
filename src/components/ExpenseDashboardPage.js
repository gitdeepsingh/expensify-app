import React from 'react';
import ExpenseList from './ExpenseList';
import ExpensesSummary from './ExpensesSummary';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />      
        <ExpenseListFilters />  
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;