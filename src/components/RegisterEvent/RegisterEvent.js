import React, {useRef, useState} from 'react';
import './RegisterEvent.css';
import logo from '../../logos/Group 1329.png';
import useAuth from '../../hooks/useAuth';
import swal from 'sweetalert';
import { Link, NavLink } from 'react-router-dom';

const RegisterEvent = () => {

    const {user, logOut} = useAuth();

    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [organize, setOrganize] = useState('');
    
    const registerVolunteer = (e) =>{
        e.preventDefault();
        const nameValue = user.displayName;
        const emailValue = user.email;
        const dateValue = date;
        const descriptionValue = description;
        const organizeValue = organize;
        const RegVolunteerService = {nameValue, emailValue, dateValue, descriptionValue, organizeValue};
        // console.log(RegVolunteerService);

        fetch('http://localhost:5000/allVolunteer', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(RegVolunteerService)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                swal("Successfully Registered!", "success");
                e.target.reset();
            }
        })
    }

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
            <div className="register-area mx-auto p-5 mt-4">
            <h5>Register as a volunteer</h5>
                <form onSubmit={registerVolunteer} className="form">
                    <input type="text" placeholder="Full Name" defaultValue={user.displayName} /><br />
                    <input type="email" placeholder="Email" defaultValue={user.email}/><br />
                    <input onBlur={(e) => setDate(e.target.value)} type="date" placeholder="Date" /><br />
                    <input onBlur={(e) => setDescription(e.target.value)} type="text" placeholder="Event Title" /><br />
                    <input onBlur={(e) => setOrganize(e.target.value)} type="text" placeholder="Organization Name" /><br />
                    <button type="submit" className="btn btn-primary w-100 btn-md mt-3">Registration</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterEvent;