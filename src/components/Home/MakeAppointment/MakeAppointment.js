import React from 'react';
import './MakeAppointment.css'
import makeAppointment from '../../../images/make-appointment.jpg'


const MakeAppointment = () => {
    return (
        
        <section style={{height:'700px'}} className="make-appointment ">
            <div className=" row d-flex align-items-center">
                
                    
                    <div className="col-md-4 offset-md-1">
                        <h5 className="text-primary text-uppercase ">Appointment</h5>
                        <h1 className="my-4">Make an Appointment <br/> Today</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                    <div className="col-md-6 ">
                        <img style={{height:'500px'}} src={makeAppointment} alt=""/>
                    </div>
            
            </div>
        </section>
    );
};

export default MakeAppointment;