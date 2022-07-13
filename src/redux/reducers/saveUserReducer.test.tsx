import saveUserReducer from './saveUserReducer'
describe("test download pdf",()=>{
   it("check for save user details",()=>{
       const action={
           "type":"POST_SAVE_USER",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = saveUserReducer(undefined, action);
   });
   it("check if user details are saved successfully",()=>{
       const action={
           "type":"SUCCESS_SAVE_USER",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = saveUserReducer(undefined, action);
   });
   it("check if user details failed",()=>{
       const action={
           "type":"FAILED_SAVE_USER",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = saveUserReducer(undefined, action);
   });
})