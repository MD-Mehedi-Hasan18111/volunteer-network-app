import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './RegisteredEvents.css';
import logo from '../../logos/Group 1329.png';
import RegEventCard from '../RegEventCard/RegEventCard';
import Footer from '../Footer/Footer';

const RegisteredEvents = () => {

    const {user, logOut} = useAuth();
    const [events, setEvents] = useState([]);

    useEffect(() =>{
        fetch(`https://calm-cove-64271.herokuapp.com/regEvents/${user.email}`)
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [events])

    console.log(events);

    return (
        <div>
            <div className="header">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="">
                        <img width="170px" src={logo} alt="" />
                    </div>
                    <div className="navigation">
                        <NavLink to="/home" activeClassName="selected">Home</NavLink>
                        <NavLink to="/donation" activeClassName="selected">Donation</NavLink>
                        <NavLink to="/events" activeClassName="selected">Events</NavLink>
                        <NavLink to="/blog" activeClassName="selected">Blog</NavLink>
                        <Link to="/register">
                            <button className="btn btn-primary">Register</button>
                        </Link>
                        <Link to="/admin">
                            <button className="btn btn-secondary">Admin</button>
                        </Link>
                        {
                            user?.email ? <>
                                <button onClick={logOut} className="btn btn-sm btn-danger me-2">Log out</button>
                            <span>{user.displayName}</span>
                            </>: ''
                        }
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
                   {
                       events?.map(event => <RegEventCard key={event._id} event={event} />)
                   }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default RegisteredEvents;