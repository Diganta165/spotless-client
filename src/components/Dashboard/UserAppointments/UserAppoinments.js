import React, { useContext, useEffect, useState } from 'react';
import UserAppointmentCard from '../UserAppointmentCard/UserAppointmentCard';
import { UserContext } from '../../../App';
import './UserAppoinments.css'
const UserAppoinments = () => {
    const [appointments, setAppointments] = useState([]);
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    
    useEffect(()=>{
        fetch('https://stark-woodland-89383.herokuapp.com/userAppointments?email='+loggedInUser.email,{
            method:'GET',
            headers: { 'Content-Type': 'application/json',
            authorization: `Bearer ${sessionStorage.getItem('token')}`

        }
        })
        .then(res=> res.json())
        .then(data => setAppointments(data))
    },[])
    return (
        <div className="user-appointment">
            <h2>User Appointments</h2>
            <div>
                {
                    appointments.map(appointment =><UserAppointmentCard appointment={appointment}></UserAppointmentCard>)
                }
            </div>
        </div>
    );
};

export default UserAppoinments;