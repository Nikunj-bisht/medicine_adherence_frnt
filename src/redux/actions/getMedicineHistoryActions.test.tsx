import {getMediceneHistoryActions} from '../actions/getMedicineHistoryActions';
import Types from "../actions/allTypes";
describe("test getMediceneHistoryActions",()=>{
    const data = "1"
    const err = "SomeError"
    const string= "medId"
    it("test getMediceneHistory",()=>{
        expect(getMediceneHistoryActions.getMedicineHistoryRequest(string)).toEqual({
            type: Types.GET_MEDICENE_HISTORY,
            payload:string,
        })
    })
    it("test getMediceneHistorySuccess",()=>{
        expect(getMediceneHistoryActions.getMedicineHistoryRequestSuccess(data)).toEqual({
            type: Types.SUCCESS_MEDICINE_HISTORY,
            payload:data,
        })
    })
    it("test getMediceneHistoryError",()=>{
        expect(getMediceneHistoryActions.getMedicineHistoryRequestFailure(err)).toEqual({
            type: Types.FAILED_MEDICINE_HISTORY,
            payload:err,
        })
    })
})