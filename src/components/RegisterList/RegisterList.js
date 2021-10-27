import React, { useEffect, useState } from 'react';
import SingleVolunteer from '../SingleVolunteer/SingleVolunteer';

const RegisterList = () => {

    const [volunteers, setVolunteers] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/allVolunteers')
        .then(res => res.json())
        .then(data => setVolunteers(data))
    }, [volunteers])

    return (
        <div>
            <h3>Volunteer Register List</h3>
            <div className="row mt-4">
                <div className="col-lg-3 fw-bold">Name</div>
                <div className="col-lg-4 fw-bold">Email</div>
                <div className="col-lg-3 fw-bold">Reg. Date</div>
                <div className="col-lg-2 fw-bold">Action</div>
            </div>
            {
                volunteers?.map(singleVolunteer => <SingleVolunteer key={singleVolunteer._id} singleVolunteer={singleVolunteer} />)
            }
        </div>
    );
};

export default RegisterList;