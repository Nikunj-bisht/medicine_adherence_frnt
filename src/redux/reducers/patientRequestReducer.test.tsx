import patientRequestReducer from './patientRequestReducer';
describe("test download pdf",()=>{
   it("check for patient request",()=>{
       const action={
           "type":"GET_PATIENT_REQUEST",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = patientRequestReducer(undefined, action);
   });
   it("check if patient request successful",()=>{
       const action={
           "type":"SUCCESS_GET_PATIENT_REQUEST",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = patientRequestReducer(undefined, action);
   });
   it("check if patient request failed",()=>{
       const action={
           "type":"FAILED_GET_PATIENT_REQUEST",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = patientRequestReducer(undefined, action);
   });
})