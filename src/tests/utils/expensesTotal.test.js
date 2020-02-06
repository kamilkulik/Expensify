import expenses from '../fixtures/expenses';
import expensesTotal from '../../utils/expensesTotal';

test('should return 0 if no expenses', () => {
  const total = expensesTotal([]);
  expect(total).toEqual(0);
});

test('should correctly add up a single expense', () => {
  const total = expensesTotal([expenses[0]]);
  expect(total).toEqual(195)
});

test('should correctly add up multiple expenses', () => {
  const total = expensesTotal(expenses);
  expect(total).toEqual(114195)
})