import { acceptRequestActions } from "./acceptRequestActions";
import Types from "../actions/allTypes";
describe("test AcceptRequestActions",()=>{
    const data = "1"
    const err = "SomeError"
    const string= "c_id"
    it("test put accept request",()=>{
        expect(acceptRequestActions.fetchAcceptRequest(string)).toEqual({
            type: Types.PUT_ACCEPT_REQUEST,
            payload:string,
        })
    })
    it("test fetchAcceptRequestSuccess",()=>{
        expect(acceptRequestActions.fetchAcceptRequestSuccess(data)).toEqual({
            type: Types.SUCCESS_ACCEPT_REQUEST,
            payload:data,
        })
    })
    it("test fetchAcceptRequestError",()=>{
        expect(acceptRequestActions.fetchAcceptRequestError(err)).toEqual({
            type: Types.FAILED_ACCEPT_REQUEST,
            payload:err,
        })
    })
})
