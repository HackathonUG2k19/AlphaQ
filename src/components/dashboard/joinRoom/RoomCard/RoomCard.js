import React from 'react'
import { connect } from 'react-redux';

import './RoomCard.css';
import { joinRoom } from '../../../../store/actions/myRoomActions';

class RoomCard extends React.Component {
    handleJoin = (e) => {
        this.props.joinRoom(this.props.roomData);
        this.forceUpdate();
    }
    render() {
        const { roomData, myRooms } = this.props;
        const joinElement = myRooms.indexOf(roomData.room_id) === -1 ? (<button className='btn btn-outline-success' onClick={this.handleJoin}>Join Room</button>)
            : (<button type="button" class="btn btn-secondary" disabled>Joined!</button>);
        return (

            <div className="r-card m-2" style={{ width: "18rem" }}>
                <div className="r-card-body text-center text-white" >
                    <h5 className="card-title">{roomData.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{roomData.tagline}</h6>
                    <div className='action-buttons row justify-content-around'>
                        {joinElement}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        myRooms: state.myRooms.myRooms
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        joinRoom: (room) => dispatch(joinRoom(room))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomCard);
