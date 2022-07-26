import {syncHistoryActions } from '../../../src/redux/actions/adherence/syncHistoryActions';
import Types from "../../../src/redux/actions/adherence/allTypes";
describe("test postSaveUserActions",()=>{
    const data = "1"
    const err = "SomeError"
    const string= "medId"
    it("test postSyncHistory",()=>{
        expect(syncHistoryActions.putSyncHistory(string)).toEqual({
            type: Types.POST_SYNC_HISTORY,
            payload:string,
        })
    })
    it("test postSyncHistorySuccess",()=>{
        expect(syncHistoryActions .putSyncHistorysuccess(data)).toEqual({
            type: Types.SUCCESS_SYNC_HISTORY,
            payload:data,
        })
    })
    it("test postSyncHistoryError",()=>{
        expect(syncHistoryActions.putSyncHistoryerror(err)).toEqual({
            type: Types.FAILED_SYNC_HISTORY,
            payload:err,
        })
    })
})