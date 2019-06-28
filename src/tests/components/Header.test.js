import React from 'react';
import { shallow } from 'enzyme';
//import toJSON from 'enzyme-to-json'; no need after setting serializer in jest.config.json

import Header from '../../components/Header';

/* 
import ReactShallowRenderer from 'react-test-renderer/shallow';
test('should render Hader correctly', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Header />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
 */

test('should render Hader correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});