import React from 'react'
import { Link } from 'react-router-dom';

import './RoomCard.css';

const RoomCard = ({ roomData }) => {
    return (
        <div className="r-card mx-2" style={{ width: "18rem" }}>
            <div className="r-card-body text-center text-white" >
                <h5 className="card-title">{roomData.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{roomData.tagline}</h6>
                <div className='action-buttons row justify-content-around'>
                    <Link to={`/room/${roomData.room_id}`} className='btn btn-outline-primary'>Enter Room</Link>
                    <Link to='/' className='btn btn-outline-danger'>Delete Room</Link>
                </div>
            </div>
        </div >
    )
}

export default RoomCard
