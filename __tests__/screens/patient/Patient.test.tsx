import React from "react";
import renderer from 'react-test-renderer';
import Patientcomp from "../../../src/screens/patient/Patient";

describe('About App', () => {
    it('renders correctly', () =>{
        const tree = renderer.create(
            <Patientcomp navigation={undefined}/>    
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});