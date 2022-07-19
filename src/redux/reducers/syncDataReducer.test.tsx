import syncDataReducer from './syncDataReducer';
describe("test download pdf",()=>{
   it("check if sync data request was sent",()=>{
       const action={
           "type":"POST_SYNC_DATA",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = syncDataReducer(undefined, action);
   });
   it("check if sync data is successful",()=>{
       const action={
           "type":"SUCCESS_SYNC_DATA",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = syncDataReducer(undefined, action);
   });
   it("check if sync data failed",()=>{
       const action={
           "type":"FAILED_SYNC_DATA",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = syncDataReducer(undefined, action);
   });
})