import expenses from '../fixtures/expenses';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import { shallow } from 'enzyme';
import React from 'react';
import expenseTotal from '../../utils/expensesTotal'

test('Should render ExpenseSummary', () => {
  const wrapper = shallow(<ExpenseSummary expensesTotal={expenseTotal(expenses)} expenseCount={expenses.length}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(<ExpenseSummary expensesTotal={expenseTotal([expenses[1]])} expenseCount={[expenses[1]].length}/>);
  expect(wrapper).toMatchSnapshot();
});