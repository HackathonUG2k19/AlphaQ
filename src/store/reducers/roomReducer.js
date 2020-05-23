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
            console.log('created room', action.room);
            return state;
        default:
            return state;
    }
}

export default roomReducer;