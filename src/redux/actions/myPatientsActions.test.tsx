import { myPatientsActions } from '../actions/myPatientsActions';
import Types from "./adherence/allTypes";
describe("test CaretakerActions",()=>{
    const data = "1"
    const err = "SomeError"
    const string= "medId"
    it("test fetchCaretakers",()=>{
        expect(myPatientsActions.fetchPatients(string)).toEqual({
            type: Types.GET_PATIENTS,
            payload:string,
        })
    })
    it("test fetchCaretakerSuccess",()=>{
        expect(myPatientsActions.fetchPatientsuccess(data)).toEqual({
            type: Types.SUCCESS_GET_PATIENTS,
            payload:data,
        })
    })
    it("test fetchCaretakerError",()=>{
        expect(myPatientsActions.fetchPatienterror(err)).toEqual({
            type: Types.FAILED_TO_GET_PATIENTS,
            payload:err,
        })
    })
})