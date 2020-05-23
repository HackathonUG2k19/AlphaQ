import React, { Component } from 'react'
import { connect } from 'react-redux';

import EventBlob from './EventBlob'

class RoomBody extends Component {
    render() {
        const events = this.props.events[this.props.room_id];
        const eventData = events ? events.map(event => {
            return (
                <EventBlob eventData={{
                    name: event.name,
                    desc: event.desc,
                    venue: event.venue,
                    time: event.time,
                    date: event.date,
                    author: event.author,
                    postDate: event.postDate
                }} />
            )
        }) : (<h1 className='display-1 text-center'>No Events Yet!</h1>)
        return (
            <div className='RoomBody my-5 container'>
                {eventData}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.event
    }
}

export default connect(mapStateToProps)(RoomBody);
