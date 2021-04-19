import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({service,date,loggedInUser}) => {
    console.log('booking card',loggedInUser)
    const [modalIsOpen,setIsOpen] = useState(false);
    
  function openModal() {
    setIsOpen(true);
  }

  

  function closeModal(){
    setIsOpen(false);
  }
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{service.subject}</h5>
                    <h3>Fee: $ {service.fee}</h3>
                    <h6>{service.visitingHour}</h6>
                    
                    <button onClick={openModal} className="btn btn-brand text-uppercase">Book Appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={service.subject} loggedInUser={loggedInUser} price={service.fee} closeModal={closeModal} date={date}></AppointmentForm>
                </div>
            </div>
        </div>
        
    );
};

export default BookingCard;