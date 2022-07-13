import getImagesReducer from './getImagesReducer';
describe("test delete request",()=>{
   it("should check for request",()=>{
       const action={
           "type":"GET_IMAGES",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = getImagesReducer(undefined, action);
   });
   it("should check for request success",()=>{
       const action={
           "type":"SUCCESS_GET_IMAGES",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result =getImagesReducer(undefined, action);
   });
   it("should check for request error",()=>{
       const action={
           "type":"FAILED_GET_IMAGES",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = getImagesReducer(undefined, action);
   });
})