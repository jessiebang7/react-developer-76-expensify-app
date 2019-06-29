const selectExpenseTotal = (expenses = []) => {
  return expenses.reduce((a, b) => a += b.amount, 0);
};

export default selectExpenseTotal;