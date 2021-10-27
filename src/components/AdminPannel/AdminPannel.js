import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';
import AddEvent from '../AddEvent/AddEvent';
import RegisterList from '../RegisterList/RegisterList';

const AdminPannel = () => {

    const [toggle, setToggle] = useState(<RegisterList />);

    const handleRegisterList = () =>{
        setToggle(<RegisterList />);
    }

    const handleAddEvent = () =>{
        setToggle(<AddEvent />)
    }

    return (
        <div>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <img width="200px" src={logo} alt="" />
                        <button onClick={handleRegisterList} className="btn mt-3"><i class="fas fa-user-check"></i> Volunteer Register List</button><br />
                        <button onClick={handleAddEvent} className="btn mt-3"><i class="fas fa-plus-circle"></i> Add Event</button><br />
                        <Link to="/home"><button className="btn mt-3"><i class="fas fa-home"></i> Back to home</button></Link>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div>
                            {toggle}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPannel;