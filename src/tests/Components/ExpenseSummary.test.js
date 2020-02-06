import expenses from '../fixtures/expenses';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import { shallow } from 'enzyme';
import React from 'react';

test('Should render ExpenseSummary', () => {
  const wrapper = shallow(<ExpenseSummary expenses={expenses}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(<ExpenseSummary expenses={[expenses[1]]}/>);
  expect(wrapper).toMatchSnapshot();
});