import { createStore, combinedReducers } from 'redux'

const demoState =  {
    expenses: [{
        id: 'xyz',
        description: 'January rent',
        note: 'this was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};