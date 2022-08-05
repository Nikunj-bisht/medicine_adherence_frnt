import {combineReducers} from 'redux';
import CareTakerReducer from './caretaker/careTakerReducer';
import loginReducer from './login/loginReducer';

export default combineReducers({CareTakerReducer, loginReducer});
