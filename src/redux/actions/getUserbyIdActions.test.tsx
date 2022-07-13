import { getUserbyIdActions } from '../actions/getUserbyIdActions';
import Types from "../actions/allTypes";
describe("test CaretakerActions",()=>{
    const data = "1"
    const err = "SomeError"
    const string= "medId"
    it("test fetchCaretakers",()=>{
        expect(getUserbyIdActions.getUserbyIdRequest(string)).toEqual({
            type: Types.GET_USER_BY_ID_REQUEST,
            payload:string,
        })
    })
    it("test fetchCaretakerSuccess",()=>{
        expect(getUserbyIdActions.getUserbyidSuccess(data)).toEqual({
            type: Types.SUCCESS_GET_USER_BY_ID_REQUEST,
            payload:data,
        })
    })
    it("test fetchCaretakerError",()=>{
        expect(getUserbyIdActions.getUserbyudFailure(err)).toEqual({
            type: Types.FAILED_GET_USER_BY_ID_REQUEST,
            payload:err,
        })
    })
})