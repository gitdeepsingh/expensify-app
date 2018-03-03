import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        Dashboard Page
    </div>
);

const AddExpensePage = () => (
    <div>
        Add Expense Page
    </div>
);

const EditExpensePage = () => (
    <div>
        EditExpense Page
    </div>
);

const HelpPage = () => (
    <div>
       HelpPage
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
