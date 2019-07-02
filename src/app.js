import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';

import './firebase/firebase';

const store = configureStore();

/* store.subscribe(()=> {
  const { expenses, filters } = store.getState();
  console.log('subscribe', getVisibleExpenses(expenses, filters));
  console.log(store.getState());
}); */

/* store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 })); */

/* store.dispatch(setTextFilter('water'));

setTimeout(() => {
  store.dispatch(setTextFilter('bill'));
}, 3000); */

/* const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log('app', visibleExpenses); */

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));