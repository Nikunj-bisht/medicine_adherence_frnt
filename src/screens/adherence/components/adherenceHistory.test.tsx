// import {shallow} from "enzyme"
// import MyComponent from "./adherenceHistory"

// describe("test adherence",()=>{
//     it("should render without error",()=>{
//         let wrapper = shallow(<MyComponent/>)
//         expect(wrapper).toMatchSnapshot()
//     })
// })



import React from 'react';
import renderer from 'react-test-renderer';
import MyComponent from "./adherenceHistory"

describe('test adherence', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<MyComponent />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});