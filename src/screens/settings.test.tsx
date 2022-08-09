import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import Settings from './settings';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({adapter: new Adapter()});

const mockedUsedNavigate = jest.fn();

jest.mock('react-navigation', () => ({
  default: mockedUsedNavigate,
}));

describe('Settings Screen', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Settings navigation={undefined} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it.only('test button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Settings handle={mockFn} />);
    wrapper.find('#onpress').simulate('press');
  });

  it.only('test button1', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Settings handle1={mockFn} />);
    wrapper.find('#onPressHandle1').simulate('press');
  });
  it.only('test open setting button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Settings openSet={mockFn} />);
    wrapper.find('#openSetting').simulate('press');
  });
});
