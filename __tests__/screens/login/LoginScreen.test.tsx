import React from "react";
import renderer from 'react-test-renderer';
import Loginscreen from "../../../src/screens/login/LoginScreen";

describe('About App', () => {
    it('renders correctly', () =>{
        const tree = renderer.create(
            <Loginscreen navigation={undefined}/>    
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});