import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { deleteRoom } from '../../../store/actions/myRoomActions';

import './RoomCard.css';

const RoomCard = (props) => {
    const handleDelete = (e) => {
        props.deleteRoom(props.roomData);
    }
    return (
        <div className="r-card mx-2" style={{ width: "18rem" }}>
            <div className="r-card-body text-center text-white" >
                <h5 className="card-title">{props.roomData.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.roomData.tagline}</h6>
                <div className='action-buttons row justify-content-around'>
                    <Link to={`/room/${props.roomData.room_id}`} className='btn btn-outline-primary'>Enter Room</Link>
                    <button onClick={handleDelete} className='btn btn-outline-danger'>Delete Room</button>
                </div>
            </div>
        </div >
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteRoom: (room) => dispatch(deleteRoom(room))
    }
}

export default connect(null, mapDispatchToProps)(RoomCard);
