import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../logos/Group 1329.png';

const Donation = () => {

    const {user, logOut} = useAuth();

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
            <h2 className="mt-3 text-center">Donation is Comming Soon.</h2>
        </div>
    );
};

export default Donation;