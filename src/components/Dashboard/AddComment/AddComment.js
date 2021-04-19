import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './AddComment.css'

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

const AddComment = ({ closeModal, modalIsOpen }) => {
    const [comment, setComment] = useState({});


    const { register, handleSubmit, formState: { errors } } = useForm();



    const containerStyle = {

        backgroundColour: 'seaGreen',

        height: "100%"
    }



    const onSubmit = data => {


        fetch('https://stark-woodland-89383.herokuapp.com/addComment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    closeModal();
                    alert('Appointment Created Successfully')
                }
            })



    }


    return (
        <section >

            <Modal
                isOpen={modalIsOpen}

                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" {...register('name')} name="name" placeholder="Your Name" className="form-control" />
                        {/* <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" /> */}
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text" {...register('comment')} name="comment" placeholder="comment" className="form-control" />
                        {/* <input type="text" ref={register({ required: true })} name="phone" placeholder="Phone Number" className="form-control" /> */}
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-brand">Send</button>
                    </div>
                </form>
            </Modal>
        </section>
    );
};

export default AddComment;