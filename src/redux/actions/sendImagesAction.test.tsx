import { sendImagesAction } from '../actions/sendImagesAction';
import Types from "../actions/allTypes";
describe("test postSaveUserActions",()=>{
    const data = "1"
    const err = "SomeError"
    const string= "medId"
    it("test postSaveUser",()=>{
        expect(sendImagesAction .sendImageRequest(string)).toEqual({
            type: Types.SEND_IMAGES,
            payload:string,
        })
    })
    it("test postSaveUserSuccess",()=>{
        expect(sendImagesAction .sendImageSuccess(data)).toEqual({
            type: Types.SUCCES_SEND_IMAGES,
            payload:data,
        })
    })
    it("test postSaveUserError",()=>{
        expect(sendImagesAction.sendImageFailure(err)).toEqual({
            type: Types.FAILED_GET_IMAGES,
            payload:err,
        })
    })
})