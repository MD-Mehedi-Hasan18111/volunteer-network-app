import React from 'react';
import './Header.css';
import logo from '../../logos/Group 1329.png';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {

    const {user, logOut} = useAuth();

    return (
        <div className="header-banner">
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
            <div className="banner w-75 mx-auto">
                <h1 className="text-center">I GROW BY HELPING PEOPLE IN NEED.</h1>
                <div class="input-group mb-3 w-50 mx-auto">
                    <input type="text" class="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-primary" type="button" id="button-addon2">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Header;