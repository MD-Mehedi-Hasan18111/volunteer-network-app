import React, { useEffect, useState } from 'react';
import EventCard from '../EventCard/EventCard';

const AllEvents = () => {

    const [events, setEvents] = useState([]);

    useEffect(() =>{
        fetch('https://calm-cove-64271.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])

    // console.log(events);

    return (
        <div className="container my-4">
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4">
                {
                    events?.map(event => <EventCard key={event._id} event={event} />)
                }
            </div>
        </div>
    );
};

export default AllEvents;