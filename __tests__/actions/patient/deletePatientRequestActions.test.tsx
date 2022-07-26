import {deletePatientActions} from '../../../src/redux/actions/patient/deletePatientRequestActions';
import Types from "../../../src/redux/actions/adherence/allTypes";
describe("test deletePatientActions",()=>{
    const data = "1"
    const err = "SomeError"
    const string= "userId"
    it("test fetchDeletePatientRequest",()=>{
        expect(deletePatientActions.deletePatientRequest(string)).toEqual({
            type: Types.GET_DELETE_PATIENT_REQUEST,
            payload:string,
        })
    })
    it("test fetchDeletePatientRequestSuccess",()=>{
        expect(deletePatientActions.deletePatientRequestSuccess(data)).toEqual({
            type: Types.SUCCESS_GET_DELETE_PATIENT_REQUEST,
            payload:data,
        })
    })
    it("test fetchDeletePatientRequestFailure",()=>{
        expect(deletePatientActions.deletePatientRequestFailure(err)).toEqual({
            type: Types.FAILED_GET_DELETE_PATIENT_REQUEST,
            payload:err,
        })
    })
})