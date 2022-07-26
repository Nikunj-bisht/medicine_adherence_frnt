import {caretakerActions} from '../../../src/redux/actions/caretaker/caretakerActions';
import Types from "../../../src/redux/actions/adherence/allTypes";
describe("test CaretakerActions",()=>{
    const data = "1"
    const err = "SomeError"
    const string= "medId"
    it("test fetchCaretakers",()=>{
        expect(caretakerActions.fetchCaretakers(string)).toEqual({
            type: Types.GET_CARETAKERS,
            payload:string,
        })
    })
    it("test fetchCaretakerSuccess",()=>{
        expect(caretakerActions.fetchCaretakerssuccess(data)).toEqual({
            type: Types.Success_CareTAKER_REQUEST,
            payload:data,
        })
    })
    it("test fetchCaretakerError",()=>{
        expect(caretakerActions.fetchCaretakerserror(err)).toEqual({
            type: Types.Failed_CareTAKER_REQUEST,
            payload:err,
        })
    })
})
