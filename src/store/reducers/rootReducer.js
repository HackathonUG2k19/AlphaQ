import authReducer from './authReducer';
import eventReducer from './eventReducer';
import roomReducer from './roomReducer';
import myRoomsReducer from './myRoomsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    event: eventReducer,
    room: roomReducer,
    myRooms: myRoomsReducer
});

export default rootReducer;