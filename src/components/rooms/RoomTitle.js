import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const RoomTitle = (props) => {
    const roomData = props.rooms.rooms.filter(room => room.id === props.room_id)[0];
    return (
        <div className='RoomTitle px-3'>
            <div className='row title justify-content-center'>
                <h1 className='display-4 col-12 text-center'> {roomData.name}</h1>
            </div>
            <div className='row meta-data justify-content-between py-2'>
                <div className='row col-12 col-md-6 justify-content-between'>
                    <p className='mt-2 room-id'>RoomID: {props.room_id}</p>
                    <h5 className='mt-2'>{roomData.tagline}</h5>
                </div>
                <Link to={`${props.location.pathname}/addEvent`} className='btn btn-outline-success'>Add Event</Link>
            </div>
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        rooms: state.room
    }
}

export default connect(mapStateToProps)(withRouter(RoomTitle));
