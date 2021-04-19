import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import UserAppoinments from '../UserAppointments/UserAppoinments';

const containerStyle = {
    
    backgroundColour: 'seaGreen',
   
    height:"100%"
}

const Dashboard = () => {
    


    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <UserAppoinments ></UserAppoinments>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;