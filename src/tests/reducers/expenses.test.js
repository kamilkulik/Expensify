import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by ID', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if ID not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add a new expense', () => {
  const newExpense = { id: '4', description: 'Cowboy hat',  note: 'vintage',  amount: 10500,  createdAt: 0 }
  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, newExpense]);
});

test('should edit an expense', () => {
  const amount = 30000
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: { amount }
  }
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test('should not edit an expense if ID not found', () => {
  const amount = 30000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '43',
    updates: { amount }
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});