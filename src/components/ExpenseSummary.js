import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import getVisibleExpenses from '../selectors/expenses';
import selectExpenseTotal from '../selectors/expenses-total';

export const ExpenseSummary = (props) => {
  const expenseWord = props.expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(props.expensesTotal / 100).format('$0,00.00');
  return(
    <div>
      <h1>Viewing {props.expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
    </div>
  )
};

const mapStateToProps = (state) => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpenseTotal(visibleExpenses)
  }
};

export default connect(mapStateToProps)(ExpenseSummary);