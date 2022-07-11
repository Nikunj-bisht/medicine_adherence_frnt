import { patientRequestActions } from '../actions/patientRequestActions';
import Types from "../actions/allTypes";
describe("test CaretakerActions",()=>{
    const data = "1"
    const err = "SomeError"
    const string= "user_id"
    it("test fetchPatientRequest",()=>{
        expect(patientRequestActions .fetchpatientrequests(string)).toEqual({
            type: Types.GET_PATIENT_REQUEST,
            payload:string,
        })
    })
    it("test fetchPatientRequestSuccess",()=>{
        expect(patientRequestActions .fetchpatientsuccess(data)).toEqual({
            type: Types.SUCCESS_GET_PATIENT_REQUEST,
            payload:data,
        })
    })
    it("test fetchPatientRequestError",()=>{
        expect(patientRequestActions .fetchpatienterror(err)).toEqual({
            type: Types.FAILED_GET_PATIENT_REQUEST,
            payload:err,
        })
    })
})