import { shallow } from 'enzyme';
import React from 'react';
import { Header } from '../../components/Header';

test('should render header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => {}}/>);
  expect(wrapper).toMatchSnapshot()
});

test('should call startLogout on button click', () => {
  const logoutSpy = jest.fn();
  const wrapper = shallow(<Header startLogout={logoutSpy} />);
  wrapper.find('button').simulate('click');
  expect(logoutSpy).toHaveBeenCalled();
});