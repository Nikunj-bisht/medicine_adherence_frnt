import deleteRequestReducer from './acceptRequestReducer';
describe("test delete request",()=>{
   it("should check for request",()=>{
       const action={
           "type":"GET_DELETE_PATIENT_REQUEST",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = deleteRequestReducer(undefined, action);
   });
   it("should check for request success",()=>{
       const action={
           "type":"SUCCESS_GET_DELETE_PATIENT_REQUEST",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result =deleteRequestReducer(undefined, action);
   });
   it("should check for request error",()=>{
       const action={
           "type":"FAILED_GET_DELETE_PATIENT_REQUEST",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = deleteRequestReducer(undefined, action);
   });
})