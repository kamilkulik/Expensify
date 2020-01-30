import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';
import React from 'react';

test('Should render single Expense List Item', () => {
  const expenseItem = expenses[1];
  const wrapper = shallow(<ExpenseListItem {...expenseItem}/>);
  expect(wrapper).toMatchSnapshot();
});