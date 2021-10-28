import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';

const NotFound = () => {
    return (
        <div>
            <div className="text-center">
                <img width="400px" src={logo} alt="" />
                <h2>Page not Found!!</h2>
                <h4>404!</h4>
                <Link to="/home">
                    <button className="btn btn-primary">Back To Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;