import {getImagesActions} from '../actions/getImagesActions';
import Types from "./adherence/allTypes";
describe("test CaretakerActions",()=>{
    const data = "1"
    const err = "SomeError"
    const number= "medId"
    it("test getImages",()=>{
        expect(getImagesActions.getImageRequest(number)).toEqual({
            type: Types.GET_IMAGES,
            payload:number,
        })
    })
    it("test getImagesSuccess",()=>{
        expect(getImagesActions. getImageSuccess(data)).toEqual({
            type: Types.SUCCES_GET_IMAGES,
            payload:data,
        })
    })
    it("test getImagesError",()=>{
        expect(getImagesActions.getImageFailure(err)).toEqual({
            type: Types.FAILED_GET_IMAGES,
            payload:err,
        })
    })
})