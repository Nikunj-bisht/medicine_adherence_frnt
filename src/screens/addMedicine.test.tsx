import React from 'react';
import renderer from 'react-test-renderer';
import Addmedicine from './addMedicine';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {TouchableOpacity, View} from 'react-native';
import {Card} from 'react-native-paper';

jest.mock('@react-navigation/native', () => ({
  // ...jest.requireActual("@react-navigation/native"),
  useFocusEffect: jest.fn(),
}));

Enzyme.configure({adapter: new Adapter()});

describe('Add Medicine Screen', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Addmedicine navigation={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('button addTableRow ', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Addmedicine deleteitem={mockFn} />);
    console.log("wrapper1",wrapper.debug());
    
    const view = wrapper.find(Card);
    console.log("wrapper",view.debug());
    
  });
});
