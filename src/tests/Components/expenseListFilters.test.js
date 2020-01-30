import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters';
// import { setTextFilter } from '../../actions/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper=shallow(
    <ExpenseListFilters 
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />)
});

test('should render expenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render expenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot();
});

// simulate & spy

// should handle text change
test('should handle text change', () => {
  const e = { target: { value: 'sample text' }}
  wrapper.find('input').simulate('change', e);
  expect(setTextFilter).toHaveBeenLastCalledWith(e.target.value);
});

// should sort by date
test('should sort by date', () => {
  const e = { target: { value: 'date' }}
  wrapper.find('select').prop('onChange')(e)
  expect(sortByDate).toHaveBeenCalled();
});

// should sort by amount
test('should sort by amount', () => {
  const e = { target: { value: 'amount' }}
  wrapper.find('select').prop('onChange')(e)
  expect(sortByAmount).toHaveBeenCalled();
});
// should handle date changes
test('should handle date change', () => {
  const startDate = altFilters.startDate;
  const endDate = altFilters.endDate;
  wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate })
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

// assert about state
// should handle date focus changes
test('should handle focus changes', () => {
  const calendarFocused = 'startDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
})