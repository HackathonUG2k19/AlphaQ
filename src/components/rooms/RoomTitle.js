import React from 'react'
import { Link, withRouter } from 'react-router-dom';

const RoomTitle = (props) => {
    return (
        <div className='RoomTitle px-3'>
            <div className='row title justify-content-center'>
                <h1 className='display-4 col-12 text-center'> Programming Club</h1>
            </div>
            <div className='row meta-data justify-content-between py-2'>
                <h5 className='mt-2'>RoomID: {props.room_id}</h5>
                <h5 className='mt-2'>Lesgo ICPC!</h5>
                <Link to={`${props.location.pathname}/addEvent`} className='btn btn-outline-success'>Add Event</Link>
            </div>
        </div >
    )
}

export default withRouter(RoomTitle)
