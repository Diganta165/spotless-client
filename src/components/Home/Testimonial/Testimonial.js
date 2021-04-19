import React from 'react';

const Testimonial = (props) => {
    console.log('Testimonial er props', props.testimonial)
    const {name, comment} = props.testimonial;
    
    
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <p className="card-text text-center">{comment}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
               
                <div>
                    <h6 className="text-primary"> -By {name}</h6>
                    
                </div>
            </div>
       </div>
    );
};

export default Testimonial;