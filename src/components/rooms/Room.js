import React, { Component } from 'react'
import RoomTitle from './RoomTitle'

import './Room.css';
import RoomBody from './RoomBody';

class Room extends Component {
    componentDidMount() {
        window.scrollTo(0, document.body.scrollHeight);
    }
    render() {
        return (
            <div className='Room'>
                <RoomTitle room_id={this.props.match.params.room_id} />
                <RoomBody room_id={this.props.match.params.room_id} />
            </div>
        )
    }
}

export default Room
