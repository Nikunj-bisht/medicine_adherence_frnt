import loginReducer from './loginReducer'
describe("test user login",()=>{
   it("should check for download pdf request",()=>{
       const action={
           "type":"LOGIN_REQUEST",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = loginReducer(undefined, action);
   });
   it("check if login is successful",()=>{
       const action={
           "type":"LOGIN_SUCCESSS",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = loginReducer(undefined, action);
   });
   it("check if login is failed",()=>{
       const action={
           "type":"LOGIN_FAILED",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = loginReducer(undefined, action);
   });
})