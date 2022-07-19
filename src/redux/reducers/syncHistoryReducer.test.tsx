import { State } from 'react-native-gesture-handler';
import syncHistoryReducer from './syncHistoryReducer';
describe("test download pdf",()=>{
   it("check if sync history request was sent",()=>{
       const action={
           "type":"POST_SYNC_HISTORY",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = syncHistoryReducer(undefined, action);
   });
   it("check if sync history is successful",()=>{
       const action={
           "type":"SUCCESS_SYNC_HISTORY",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = syncHistoryReducer(undefined, action);
   });
   it("check if sync history failed",()=>{
       const action={
           "type":"FAILED_SYNC_HISTORY",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = syncHistoryReducer(undefined, action);
   });
})