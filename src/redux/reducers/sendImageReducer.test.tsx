import sendImageReducer from './sendImageReducer';
describe("test sending image",()=>{
   it("check for send image request",()=>{
       const action={
           "type":"SEND_IMAGES",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = sendImageReducer(undefined, action);
   });
   it("check if image is being sent successfully",()=>{
       const action={
           "type":"SUCCESS_SEND_IMAGES",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = sendImageReducer(undefined, action);
   });
   it("check if image was not sent",()=>{
       const action={
           "type":"FAILED_SEND_IMAGES",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = sendImageReducer(undefined, action);
   });
})