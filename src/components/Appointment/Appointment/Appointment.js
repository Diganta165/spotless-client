import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';


const Appointment = () => {
    
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log('appointment',loggedInUser)

    

    const handleDateChange = date =>{
        setSelectedDate(date);
    }
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            
            <BookAppointment date={selectedDate} loggedInUser={loggedInUser}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;