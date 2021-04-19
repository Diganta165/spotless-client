import React from 'react';

const UserAppointmentCard = (props) => {
    return (
        <div>
            <h4>{props.appointment.service}</h4>
            <ul>${props.appointment.price}</ul>
        </div>
    );
};

export default UserAppointmentCard;