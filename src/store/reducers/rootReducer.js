import authReducer from './authReducer';
import eventReducer from './eventReducer';
import roomReducer from './roomReducer';
import myRoomsReducer from './myRoomsReducer';
import { firestoreReducer } from 'redux-firestore'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    event: eventReducer,
    room: roomReducer,
    myRooms: myRoomsReducer,
    firestore: firestoreReducer
});

export default rootReducer;