export const createRoom = (room) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('rooms').add({
            name: room.name,
            tagline: room.tagline
        }).then(() => {
            console.log("Successfully added room to Firebase!");
        })
            .catch(err => { dispatch({ type: "CREATE_ROOM_ERROR", err }) })
        dispatch({ type: "CREATE_ROOM", room });
    }
};