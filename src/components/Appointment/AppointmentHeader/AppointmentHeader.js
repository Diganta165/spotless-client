import React from 'react';
import windowCleaning from '../../../images/window-cleaning.jpg'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
    
    return (
        <main style={{ height: '700px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1>Appointment</h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />

            </div>
            <div className="col-md-6">
                <img src={windowCleaning} alt="" className="img-fluid" />
            </div>

        </main>
    );
};

export default AppointmentHeader;