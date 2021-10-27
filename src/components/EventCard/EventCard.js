import React from 'react';
import { Link } from 'react-router-dom';
import './EventCard.css';

const EventCard = (props) => {

    const {title, image} = props.event;

    const linkStyle = {
        textDecoration: "none",
        color: "#000"
    }

    return (
        <Link style={linkStyle} to="/register">
            <div className="col">
                <div className="eventCard text-center">
                    <img width="100%" src={image} alt="" />
                    <h3 className="mt-2">{title}</h3>
                </div>
            </div>
        </Link>
    );
};

export default EventCard;