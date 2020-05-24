import React, { Component } from 'react'
import { connect } from 'react-redux';

import RoomCard from './RoomCard/RoomCard';
import firebase from '../../../config/fbConfig';

class RoomList extends Component {
    state = {
        firestoreRooms: []
    }
    componentDidMount() {
        const firestore = firebase.firestore();
        let newRooms = [];
        firestore.collection("rooms").get()
            .then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    newRooms.push(doc.data());
                });
            })
            .catch(err => console.log("Error"));
        this.setState({ firestoreRooms: newRooms.length ? this.state.firestoreRooms : newRooms });
    }
    render() {
        console.log(this.state.firestoreRooms);
        const { rooms } = this.props;
        const RoomData = rooms.map(room => {
            return <RoomCard roomData={{ name: room.name, tagline: room.tagline, room_id: room.id, fRoom: false }} key={room.id} />;
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
