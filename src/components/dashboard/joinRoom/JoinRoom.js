import React, { Component } from 'react'
import RoomList from './RoomList'

class JoinRoom extends Component {
    render() {
        return (
            <div className='JoinRoom container'>
                <h1 className='display-3 text-center my-5'>All Rooms</h1>
                <RoomList />
            </div>
        )
    }
}

export default JoinRoom;
