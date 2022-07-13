import acceptRequestReducer from './acceptRequestReducer';
describe("test download pdf",()=>{
   it("should check for request",()=>{
       const action={
           "type":"PUT_ACCEPT_REQUEST",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = acceptRequestReducer(undefined, action);
   });
   it("should check for request success",()=>{
       const action={
           "type":"SUCCESS_ACCEPT_REQUEST",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = acceptRequestReducer(undefined, action);
   });
   it("should check for request error",()=>{
       const action={
           "type":"FAILED_ACCEPT_REQUESR",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = acceptRequestReducer(undefined, action);
   });
})