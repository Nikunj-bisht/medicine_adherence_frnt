import {syncDataActions } from '../../../src/redux/actions/adherence/syncDataActions';
import Types from "../../../src/redux/actions/adherence/allTypes";
describe("test postSaveUserActions",()=>{
    const data = "1"
    const err = "SomeError"
    const string= "medId"
    it("test postSyncData",()=>{
        expect(syncDataActions.postSyncData(string)).toEqual({
            type: Types.POST_SYNC_DATA,
            payload:string,
        })
    })
    it("test postSyncDataSuccess",()=>{
        expect(syncDataActions .postSyncDatasuccess(data)).toEqual({
            type: Types.SUCCESS_SYNC_DATA,
            payload:data,
        })
    })
    it("test postSyncDataError",()=>{
        expect(syncDataActions.postSyncDataerror(err)).toEqual({
            type: Types.FAILED_SYNC_DATA,
            payload:err,
        })
    })
})