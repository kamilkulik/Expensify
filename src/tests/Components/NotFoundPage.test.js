import { shallow } from 'enzyme';
import React from 'react';
import NotFoundPage from '../../components/NotFoundPage';

test('should render header correctly', () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot()
});

