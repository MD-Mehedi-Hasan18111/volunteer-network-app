import React from 'react';
import swal from 'sweetalert';
import './SingleVolunteer.css';

const SingleVolunteer = (props) => {

    const {_id, nameValue, emailValue, dateValue} = props.singleVolunteer;

    const handleDelete = () =>{
        fetch(`https://calm-cove-64271.herokuapp.com/regEvents/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                swal("Successfully Deleted!", "You cancel the event" , "success");
            }
        })
    }

    return (
        <div className="row my-3 d-flex align-items-center">
            <div className="c col-lg-3">{nameValue}</div>
            <div className="c col-lg-4">{emailValue}</div>
            <div className="c col-lg-3">{dateValue}</div>
            <div className="c col-lg-1"><button onClick={handleDelete} className="btn btn-danger btn-sm">Delete</button></div>
        </div>
    );
};

export default SingleVolunteer;