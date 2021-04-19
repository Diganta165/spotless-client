import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';


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

const Admin = ({adminModalIsOpen,adminCloseModal}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const containerStyle = {
        
        backgroundColour: 'seaGreen',
        
        height:"100%"
    }

    const onSubmit = data =>{
        fetch('https://stark-woodland-89383.herokuapp.com/addAdmin',{
            method: 'POST',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success=>{
            if(success){
                adminCloseModal();
                alert('Admin Created Successfully')
            }
        })
    
    }
    return (
        <section>
            <Modal
                isOpen={adminModalIsOpen}

                onRequestClose={adminCloseModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="email" {...register('email')} name="email" placeholder="Admin Email" className="form-control" />
                        
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    
                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-brand">Send</button>
                    </div>
                </form>
            </Modal> 
        </section>
    );
};

export default Admin;