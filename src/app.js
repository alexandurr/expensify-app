import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
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
        404! - <Link to="/">Go Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);


const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashbpardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NoFoundPage} />
            </Switch>
        </div>
        
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));