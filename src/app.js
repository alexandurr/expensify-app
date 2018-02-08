import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

const NoFoundPage = () => (
    <div>
        404!
    </div>
);


const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashbpardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NoFoundPage} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));