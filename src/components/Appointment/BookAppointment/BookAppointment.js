import React, { useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookingCard from '../BookingCard/BookingCard';



const BookAppointment = ({date,loggedInUser}) => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('https://stark-woodland-89383.herokuapp.com/userServices')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data);
            })
    }, [])
    
    console.log('Book Appointment',loggedInUser)
    return (
        <section>
            <h1 className="text-center text-brand mb-5">Available Appointments on {date.toDateString()}</h1>
            <div className="row">
                {
                    services.map(service=> <BookingCard service={service} date={date} loggedInUser={loggedInUser}  ></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;