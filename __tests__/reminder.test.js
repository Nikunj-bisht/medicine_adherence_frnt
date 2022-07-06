import React from "react";
import renderer from 'react-test-renderer';
import Reminder from "../src/screens/alarm/Reminder";

describe('Reminder Screen', () => {
     it('renders correctly', () => {
         const tree = renderer.create(
             <Reminder/>
         ).toJSON();
         expect(tree).toMatchSnapshot();
     });
 });