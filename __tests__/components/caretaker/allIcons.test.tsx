import Enzyme, { render } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import React from "react";
import renderer from 'react-test-renderer';
import configureStore from "redux-mock-store";
import enableHooks from "jest-react-hooks-shallow";
import toJson from "enzyme-to-json";
import {Righttoobracket} from '../../../src/components/caretaker/allIcons'
enableHooks(jest);

jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');


describe('Click send image', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(<Righttoobracket/>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
});
