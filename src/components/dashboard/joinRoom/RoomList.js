import React, { Component } from 'react'
import { connect } from 'react-redux';

import RoomCard from './RoomCard/RoomCard';

class RoomList extends Component {
    render() {
        const { rooms } = this.props;
        const RoomData = rooms.map(room => {
            return <RoomCard roomData={{ name: room.name, tagline: room.tagline, room_id: room.id }} key={room.id} />;
        })
        return (
            <div className='RoomList'>
                <div className='row'>
                    {RoomData}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        rooms: state.room.rooms
    }
}

export default connect(mapStateToProps)(RoomList);
