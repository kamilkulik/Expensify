import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense } from '../../actions/expenses';
const uuidv1 = require('uuid/v1');
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt}
  });
  database.ref('expenses').set(expensesData).then(() => done());
});

//REMOVE EXPENSE

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({ 
    type: 'REMOVE_EXPENSE',
    id: '123abc'
   })
});


// EDIT EXPENSE

test('should fire an edit action', () => {
  const action = editExpense( '123d23423', { description: 'expense123', amount: '9999', createdAt: '12345' })
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123d23423',
    updates: {description: 'expense123',
    amount: '9999',
    createdAt: '12345'}
   });
});

//ADD EXPENSE

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'this was last month\'s rent'
  };
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
});

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'Logitech MX Master',
    createdAt: 1000
  }
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  })
});

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({});
  const expenseDefaults = {
    description: '', 
    note: '', 
    amount: 0, 
    createdAt: 0 
  }
  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefaults
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefaults);
    done();
  });
});

// test('should setup add expense action object with default values', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: { 
//       description: '', 
//       note: '', 
//       amount: 0, 
//       createdAt: 0,
//       id: expect.any(String) }
//   })
// });

test('should setup set expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
});

test('should fetch the expenses from firebase', (done) => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  })
});

test('should remove an expense from firebase', (done) => {
  // try to fetch expense and call val on snapshot - if there's no data there its good
  const store = createMockStore({});
  const id = { id: 1 };
  store.dispatch(startRemoveExpense( id )).then(() => {
    const actions = store.getActions();

    return database.ref(`expenses/${actions[0].id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toBe(null);
    done();
  })
});