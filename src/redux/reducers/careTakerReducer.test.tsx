import careTakerReducer from './careTakerReducer';
describe("test caretaker request",()=>{
   it("should check for request",()=>{
       const action={
           "type":"GET_CARETAKERS",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = careTakerReducer (undefined, action);
   });
   it("should check for request success",()=>{
       const action={
           "type":"Success_CareTAKER_REQUEST",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = careTakerReducer (undefined, action);
   });
   it("should check for request error",()=>{
       const action={
           "type":"Failed_CareTAKER_REQUEST",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = careTakerReducer (undefined, action);
   });
})