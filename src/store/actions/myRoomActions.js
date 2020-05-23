export const joinRoom = (room) => {
    return (dispatch, getState) => {
        //Make async call
        dispatch({ type: "JOIN_ROOM", room })
    }
};

export const deleteRoom = (room) => {
    return (dispatch, getState) => {
        // Make async call
        dispatch({ type: "DELETE_ROOM", room })
    }
};