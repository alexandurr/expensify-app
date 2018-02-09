import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashbpardPage from '../components/ExpenseDashbpardPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NoFoundPage from '../components/NoFoundPage';

const AppRouter = () => (
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

export default AppRouter;