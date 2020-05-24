// State Structure:
// key: Room ID
// Value: Object {name, desc, venue, time, date, author, postDate}

import { v4 } from "uuid";

const initState = {
    1: [{
        id: "1.1",
        name: "ICPC Rule Explanation",
        desc: "Guidelines to giving ICPC",
        venue: "Amphi",
        time: "10:00PM",
        date: "15/08/2020",
        author: "Anirudh",
        postDate: "14/08/2020",
        roomID: "1"
    },
    {
        id: "1.2",
        name: "Flow Networks Discussion",
        desc: "Discussion on Solving Unconventional Problems by apporaching them as Flow Problems",
        venue: "CR-1",
        time: "7:00PM",
        date: "14/07/2020",
        author: "Arnav Juneja",
        postDate: "10/07/2020",
        roomID: "1"
    }],
    2: [{
        id: "2.1",
        name: "FlashMob",
        desc: "FlashMob Practice for Felicity",
        venue: "Yoga Room",
        time: "5:00PM",
        date: "12/02/2020",
        author: "Rahul Sajnani",
        postDate: "10/02/2020",
        roomID: "2"
    },
    {
        id: "2.2",
        name: "Hip Hop Workshop",
        desc: "A Dance workshop that'll teach you moves for every beat",
        venue: "Yoga Hall",
        time: "7:00PM",
        date: "14/07/2020",
        author: "Shradha Seghal",
        postDate: "10/07/2020",
        roomID: "2"
    }]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_EVENT":
            let thisRoomEvents = state[action.event.roomID];
            if (!thisRoomEvents)
                thisRoomEvents = [];
            thisRoomEvents.push({ ...action.event, id: v4(), author: "Ritvik Aryan Kalra", postDate:"24/05/2020" });
            return { ...state, [action.event.roomID]: thisRoomEvents };
        default:
            return state;
    }
}

export default projectReducer;