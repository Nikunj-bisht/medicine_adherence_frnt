import { postSaveUserActions } from '../actions/postSaveUserActions';
import Types from "./adherence/allTypes";
describe("test postSaveUserActions",()=>{
    const data = "1"
    const err = "SomeError"
    const string= "user_id"
    it("test postSaveUser",()=>{
        expect(postSaveUserActions .postSaveUserDetails(string,string)).toEqual({
            type: Types.POST_SAVE_USER,
            payload:string,
        })
    })
    it("test postSaveUserSuccess",()=>{
        expect(postSaveUserActions .postSaveUserDetailssuccess(data)).toEqual({
            type: Types.SUCCESS_SAVE_USER,
            payload:data,
        })
    })
    it("test postSaveUserError",()=>{
        expect(postSaveUserActions .postSaveUserDetailserror(err)).toEqual({
            type: Types.FAILED_SAVE_USER,
            payload:err,
        })
    })
})