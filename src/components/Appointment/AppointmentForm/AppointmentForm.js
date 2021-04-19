import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date, price, loggedInUser }) => {
    // const [loggedInUser, setLoggedInUser] = useState(UserContext);
    console.log('appointment form',loggedInUser);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
        
        // console.log(data);
        data.email=loggedInUser.email;
        data.service = appointmentOn;
        data.price = price;
        data.date = date;
        data.created = new Date();
        fetch('https://stark-woodland-89383.herokuapp.com/addAppointment',{
            method: 'POST',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success=>{
            if(success){
                closeModal();
                alert('Appointment Created Successfully')
            }
        })

        
        
    }

    return (
        <div>
            
            <Modal
                isOpen={modalIsOpen}

                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                
                

                <h2 className="text-center text-brand">{appointmentOn}</h2>
                <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" {...register('name')} name="name" placeholder="Your Name" className="form-control" />
                       
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text" {...register('phone')} name="phone" placeholder="Phone Number" className="form-control" />
                        
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    
                    <ProcessPayment></ProcessPayment>

                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-brand">Send</button>
                    </div>
                </form>
            </Modal> 

            
        </div>
    );
};

export default AppointmentForm;