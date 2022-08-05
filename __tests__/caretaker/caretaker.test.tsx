import React from 'react';
import renderer from 'react-test-renderer';
// import Adapter from 'enzyme-adapter-react-15';
import CareTaker from '../../src/screens/caretaker/caretaker';
import Enzyme, {shallow} from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() })
jest.mock("@react-native-async-storage/async-storage", () => ({
  default: jest.fn(),
}));
const defaultProps={
  navigation:jest.fn()
}
describe('Caretaker Request', () => {
  it('renders correctly', () => {
    const tree = renderer.create(< CareTaker navigation={undefined} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it.only("close btn", () => {
    const headerRight=jest.fn();
    const wrapper = shallow(<CareTaker {...defaultProps} headerRight={mockfn} />);
    console.log("wrapper",wrapper.debug())
  const btn = wrapper.find("#component")
  console.log("wrapper111",wrapper.find("component").debug())


  expect(btn.length).toEqual(1)
    // wrapper.find("#cliccck").simulate("click");
    // expect(defaultProps.setTrigger.mock.calls.length).toBe(1);
  });
});