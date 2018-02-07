import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashbpardPage = () => (
    <div>
        this is my dashboard page
    </div>
);

const AddExpensePage = () => (
    <div>
        this is my expense page
    </div>
);

const EditExpensePage = () => (
    <div>
        this is my edit expense page
    </div>
);

const HelpPage = () => (
    <div>
        this is my help page
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashbpardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));