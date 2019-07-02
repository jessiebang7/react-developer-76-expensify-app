import React from 'react';
import { shallow } from 'enzyme';

import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let startEditExpense, startRemoveExpense, history, expense, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  expense = expenses[2];
  wrapper = shallow(<EditExpensePage
    expense={expense}
    startEditExpense={startEditExpense}
    startRemoveExpense={startRemoveExpense} 
    history={history}/>)
});

test("should render EditExpensePage", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle startEditExpense", () =>{
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(expense.id, expense);
});

test("should handle startRemoveExpense", () =>{
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expense.id});
});