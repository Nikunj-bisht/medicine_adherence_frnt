import {combineReducers} from 'redux';
import CareTakerReducer from './careTakerReducer';
import loginReducer from './loginReducer';

export default combineReducers({CareTakerReducer, loginReducer});
