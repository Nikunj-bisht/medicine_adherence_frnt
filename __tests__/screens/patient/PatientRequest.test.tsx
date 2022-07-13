import React from "react";
import renderer from 'react-test-renderer';
import Patientrequest from "../../../src/screens/patient/PatientRequest";

describe('About App', () => {
    it('renders correctly', () =>{
        const tree = renderer.create(
            <Patientrequest/>    
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});