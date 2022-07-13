import getPdfReducer from './getPdfReducer'
describe("test download pdf",()=>{
   it("should check for download pdf request",()=>{
       const action={
           "type":"GET_SEND_PDF",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = getPdfReducer(undefined, action);
   });
   it("should check for history syncing",()=>{
       const action={
           "type":"SSUCCESS_SEND_PDF",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = getPdfReducer(undefined, action);
   });
   it("should check for history syncing",()=>{
       const action={
           "type":"FAILED_SEND_PDF",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = getPdfReducer(undefined, action);
   });
})