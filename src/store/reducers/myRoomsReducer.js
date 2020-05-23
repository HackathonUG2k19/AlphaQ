const initState = {
    myRooms: []
}

const roomReducer = (state = initState, action) => {
    switch (action.type) {
        case "JOIN_ROOM":
            let currentRooms = state.myRooms;
            if (currentRooms.indexOf(action.room.room_id) === -1)
                currentRooms.push(action.room.room_id);
            return { ...state, myRooms: currentRooms };
        case "DELETE_ROOM":
            const newRooms = state.myRooms.filter(id => id !== action.room.room_id);
            return { ...state, myRooms: newRooms };
        default:
            return state;
    }
}

export default roomReducer;