import { getPatientRequestActions } from '../actions/getPatientRequestActions';
import Types from "../actions/allTypes";
describe("test CaretakerActions",()=>{
    const data = "1"
    const err = "SomeError"
    const string= "medId"
    it("test fetchCaretakers",()=>{
        expect(getPatientRequestActions .getPatientRequest(string)).toEqual({
            type: Types.GET_PATIENT_REQUEST,
            payload:string,
        })
    })
    it("test fetchCaretakerSuccess",()=>{
        expect(getPatientRequestActions .getPatientRequestSuccess(data)).toEqual({
            type: Types.SUCCESS_GET_PATIENT_REQUEST,
            payload:data,
        })
    })
    it("test fetchCaretakerError",()=>{
        expect(getPatientRequestActions .getPatientRequestFailure(err)).toEqual({
            type: Types.FAILED_GET_PATIENT_REQUEST,
            payload:err,
        })
    })
})
