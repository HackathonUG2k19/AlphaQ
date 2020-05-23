import React, { Component } from 'react'
import { connect } from 'react-redux';

import RoomCard from './RoomCard/RoomCard';

class MyRooms extends Component {
    render() {
        const { rooms, myRoomList } = this.props;
        const myRooms = rooms.filter(room => {
            return (myRoomList.indexOf(room.id.toString()) !== -1);
        })
        const RoomData = myRooms.length ? myRooms.map(room => {
            return <RoomCard roomData={{ name: room.name, tagline: room.tagline, room_id: room.id }} key={room.id} />;
        }) : <h1 className='display-3 text-center col-12'>Looks a litte empty here :(</h1>
        return (
            <div className='MyRooms'>
                <div className='row'>
                    {RoomData}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        rooms: state.room.rooms,
        myRoomList: state.myRooms.myRooms
    }
}

export default connect(mapStateToProps)(MyRooms);
