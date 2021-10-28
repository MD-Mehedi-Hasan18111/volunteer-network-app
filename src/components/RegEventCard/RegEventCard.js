import React from 'react';
import swal from 'sweetalert';

const RegEventCard = (props) => {

    const {_id, nameValue, dateValue, descriptionValue, organizeValue} = props.event;

    const deleteEvent = () =>{
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
        <div className="col">
            <div className="card text-center h-100 p-4">
                <h4>{descriptionValue}</h4>
                <p>{organizeValue}</p>
                <h5>{dateValue}</h5>
                <button onClick={deleteEvent} className="btn btn-danger w-100">Cancel</button>
            </div>
        </div>
    );
};

export default RegEventCard;