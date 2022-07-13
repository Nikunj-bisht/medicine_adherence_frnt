import React from "react";
import renderer from 'react-test-renderer';
import Addmedicine from "../../src/screens/AddMedicine";

describe('Add Medicine', () => {
    it('renders correctly', () =>{
        const tree = renderer.create(
            <Addmedicine navigation={undefined}/>    
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});