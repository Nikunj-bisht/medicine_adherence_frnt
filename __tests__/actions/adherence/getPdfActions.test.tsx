import { getPdfActions } from '../../../src/redux/actions/adherence/getPdfActions'
import Types from "../../../src/redux/actions/allTypes";
describe("test CaretakerActions",()=>{
    const data = "1"
    const err = "SomeError"
    const string= "medId"
    it("test fetchCaretakers",()=>{
        expect(getPdfActions.getPdfRequest(string)).toEqual({
            type: Types.GET_SEND_PDF,
            payload:string,
        })
    })
    it("test fetchCaretakerSuccess",()=>{
        expect(getPdfActions.getPdfSuccess(data)).toEqual({
            type: Types.SUCCESS_SEND_PDF,
            payload:data,
        })
    })
    it("test fetchCaretakerError",()=>{
        expect(getPdfActions.getPdfFailure(err)).toEqual({
            type: Types.FAILED_SEND_PDF,
            payload:err,
        })
    })
})
