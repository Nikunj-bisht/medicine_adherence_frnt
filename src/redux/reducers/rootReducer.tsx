import {combineReducers} from 'redux';
import CareTakerReducer from './caretaker/careTakerReducer';
import loginReducer from './loginReducer';

export default combineReducers({CareTakerReducer, loginReducer});
