import { patientReqActions} from '../../../src/redux/actions/patient/patientReqActions';
import Types from "../../../src/redux/actions/allTypes";
describe("test CaretakerActions",()=>{
    const data = "1"
    const err = "SomeError"
    const string= "medId"
    it("test fetchCaretakers",()=>{
        expect(patientReqActions .getPatientRequest(string)).toEqual({
            type: Types.GET_PATIENT_REQUEST,
            payload:string,
        })
    })
    it("test fetchCaretakerSuccess",()=>{
        expect(patientReqActions .getPatientRequestSuccess(data)).toEqual({
            type: Types.SUCCESS_GET_PATIENT_REQUEST,
            payload:data,
        })
    })
    it("test fetchCaretakerError",()=>{
        expect(patientReqActions .getPatientRequestFailure(err)).toEqual({
            type: Types.FAILED_GET_PATIENT_REQUEST,
            payload:err,
        })
    })
})
