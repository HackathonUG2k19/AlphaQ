import React from 'react'

const EventBlob = ({ eventData }) => {
    return (
        <div className='EventBlob row col-12 justify-content-center my-4'>
            <div className="card text-center bg-custom col-12">
                <div className="card-body">
                    <h4 className="card-title">{eventData.name}</h4>
                    <p className="card-text">{eventData.desc}</p>
                    <ul className='event-data'>
                        <li><span role='img' aria-label='emoji'>📍</span> Venue: {eventData.venue}</li>
                        <li><span role='img' aria-label='emoji'>🕒</span>Time: {eventData.time}</li>
                        <li><span role='img' aria-label='emoji'>📅</span> Date: {eventData.date}</li>
                    </ul>
                    <div className='row justify-content-end px-5'>
                    </div>
                </div>
                <div className="card-footer pt-1 bottom-data">
                    <div className='row justify-content-between px-3'>
                        <p className='m-0'>-{eventData.author}</p>
                        <p className='m-0'>{eventData.postDate}</p>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default EventBlob
