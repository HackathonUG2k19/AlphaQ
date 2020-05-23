export const createRoom = (room) => {
    return (dispatch, getState) => {
        //Make async call
        dispatch({ type: "CREATE_ROOM", room })
    }
};