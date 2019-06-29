import expenses from '../fixtures/expenses';
import selectExpenseTotal from '../../selectors/expenses-total';

test('should return 0 if no expenses', () => {
  let res = selectExpenseTotal([]);
  expect(res).toBe(0);
});

test('should coreectly add up a single expense', () => {
  let res = selectExpenseTotal([expenses[0]]);
  expect(res).toBe(195);
});

test('should coreectly add up multiple expenses', () => {
  let result = selectExpenseTotal(expenses);
  expect(result).toBe(114195);
});
