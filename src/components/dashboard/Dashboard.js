import React, { Component } from 'react'
import MyRooms from './MyRooms'

class Dashboard extends Component {
    render() {
        return (
            <div className='Dashboard container'>
                <h1 className='display-3 text-center my-5'>My Rooms</h1>
                <MyRooms />
            </div>
        )
    }
}

export default Dashboard
