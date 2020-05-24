const initState = {
    rooms: [
        {
            id: "1",
            name: "Programming Club",
            tagline: "Lessgo ICPC!"
        },
        {
            id: "2",
            name: "Dance Club",
            tagline: "Where's the party tonight?!"
        },
        {
            id: "3",
            name: "OSDG Group",
            tagline: "Either your code is executed, or you are executed!"
        }
    ]
}

const roomReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_ROOM":
            let newRooms = initState.rooms;
            newRooms.push(action.room);
            return { ...state, rooms: newRooms };
        case "CREATE_ROOM_ERROR":
            console.log("Error creating new room! ", action.err);
            return state;
        default:
            return state;
    }
}

export default roomReducer;