import patientProfileReducer from'./patientProfileReducer';
describe("test download pdf",()=>{
   it("should check for download pdf request",()=>{
       const action={
           "type":"GET_PROFILE",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = patientProfileReducer(undefined, action);
   });
   it("should check for history syncing",()=>{
       const action={
           "type":"SUCCESS_GET_PROFILE",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = patientProfileReducer(undefined, action);
   });
   it("should check for history syncing",()=>{
       const action={
           "type":"FAILED_GET_PROFILE",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = patientProfileReducer(undefined, action);
   });
})