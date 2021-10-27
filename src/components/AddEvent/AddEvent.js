import React, { useRef } from 'react';
import swal from 'sweetalert';

const AddEvent = () => {

    const textareaStyle = {
        height: "130px"
    }

    const titleRef = useRef();
    const dateRef = useRef();
    const descriptionRef = useRef();
    const imgRef = useRef();

    const addEvent = (e) =>{
        e.preventDefault();
        const event = {
            title: titleRef.current.value,
            date: dateRef.current.value,
            description: descriptionRef.current.value,
            image: imgRef.current.value
        }

        fetch('http://localhost:5000/eventPost', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(event)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                swal("Successfully Created Event!", "You Create an event" , "success");
                e.target.reset();
            }
        })
    }

    return (
        <div>
            <h2>Add Event</h2>
            <form onSubmit={addEvent}>
                <input ref={titleRef} className="form-control border-2" type="text" placeholder="Event Title" /><br />
                <input ref={dateRef} className="form-control border-2" type="date" placeholder="Date" /><br />
                <textarea ref={descriptionRef} style={textareaStyle} className="form-control border-2" type="text" placeholder="Description" /><br />
                <input ref={imgRef} className="form-control border-2" type="text" placeholder="Image URL" />
                <button type="submit" className="btn btn-primary mt-4 w-100">Submit</button>
            </form>
        </div>
    );
};

export default AddEvent;