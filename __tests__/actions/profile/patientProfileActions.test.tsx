import { patientProfileActions } from '../../../src/redux/actions/profile/patientProfileActions';
import Types from "../../../src/redux/actions/adherence/allTypes";
describe("test CaretakerActions",()=>{
    const data = "1"
    const err = "SomeError"
    const string= "user_id"
    it("test fetchPatientProfile",()=>{
        expect(patientProfileActions.fetchpatientProfile(string)).toEqual({
            type: Types.GET_PROFILE,
            payload:string,
        })
    })
    it("test fetchPatientProfileSuccess",()=>{
        expect(patientProfileActions.fetchpatientProfilesuccess(data)).toEqual({
            type: Types.SUCCESS_GET_PROFILE,
            payload:data,
        })
    })
    it("test fetchPatientProfileError",()=>{
        expect(patientProfileActions.fetchpatientProfilerror(err)).toEqual({
            type: Types.FAILED_GET_PROFILE,
            payload:err,
        })
    })
})