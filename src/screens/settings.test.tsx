import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import Settings from './settings';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({adapter: new Adapter()});

const mockedUsedNavigate = jest.fn()

jest.mock("react-navigation", () => ({
  default: mockedUsedNavigate,
}));

describe('Settings Screen', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Settings navigation={undefined} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('test button', () => {
    const tree = shallow(<Settings navigation={undefined} />);
    // .toJSON()
    const btn = tree.find(`[title="About Medstick"]`);
    expect(btn.length).toEqual(1);
    
    // btn.simulate("press")
    // expect(mockedUsedNavigate).toHaveBeenCalled()
  });
});
