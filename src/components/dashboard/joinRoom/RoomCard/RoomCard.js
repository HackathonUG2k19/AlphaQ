import React from 'react'
import { connect } from 'react-redux';

import './RoomCard.css';
import { joinRoom } from '../../../../store/actions/myRoomActions';

const RoomCard = ({ roomData, joinRoom }) => {
    const handleJoin = (e) => {
        // console.log("Joining ", roomData);
        joinRoom(roomData);
    }
    return (
        <div className="r-card m-2" style={{ width: "18rem" }}>
            <div className="r-card-body text-center text-white" >
                <h5 className="card-title">{roomData.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{roomData.tagline}</h6>
                <div className='action-buttons row justify-content-around'>
                    <button className='btn btn-outline-success' onClick={handleJoin}>Join Room</button>
                </div>
            </div>
        </div >
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        joinRoom: (room) => dispatch(joinRoom(room))
    }
}

export default connect(null, mapDispatchToProps)(RoomCard);
