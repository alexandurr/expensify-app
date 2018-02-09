import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
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
        <Link to="/">Home</Link>
        <Link to="/create">Create Expense</Link>
        <Link to="/edit">Edit Ecpense</Link>
        <Link to="/help">Help</Link>
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