import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should correctly render ExpenseSummary with 1 expense', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpenseSummary with 2 expenses', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={2} expensesTotal={234567} />);
  expect(wrapper).toMatchSnapshot();
});