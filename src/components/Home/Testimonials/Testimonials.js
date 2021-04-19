import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial'
import './Testimonials.css'
import wilson from '../../../images/person3.jpg'
import ema from '../../../images/person2.jpg'
import aliza from '../../../images/person1.jpg'




const Testimonials = () => {

    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('https://stark-woodland-89383.herokuapp.com/userComments')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setComments(data);
            })
    }, [])
    console.log('comments data', comments)
    

    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-primary text-uppercase">Testimonial</h5>
                    <h1>What Our Customers<br /> Say </h1>
                </div>
                <div className="card-deck mt-5">
                    {
                       
                        comments.map(testimonial => <Testimonial key={testimonial._id} testimonial={testimonial}></Testimonial>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;