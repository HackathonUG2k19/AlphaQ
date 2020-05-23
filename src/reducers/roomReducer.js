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
    return state;
}

export default roomReducer;