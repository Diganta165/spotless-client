import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const ServiceDetail = ({service}) => {
    // console.log(props)
    // const history = useHistory();
    
    // const handleAppointment = (id) =>{
    //     history.push(`/appointment/${id}`);
    // }
    // const handleAppointment = () =>{
    //     history.push('/appointment');
    // }

    // const FancyLink = React.forwardRef((props, ref)=>(
    //     // <a ref={ref}{...props}>{props.children}</a>
    //     <a ref={ref}{...props}> {props.children}</a>
        
    //     ))
    
    return (
        <div className = "col-md-4 text-center">
            
            <h5 style={{color:'#B2BEB5',marginTop:'10px'}}>{service.subject}</h5>
            <h5 style={{color:'#B2BEB5',marginTop:'10px'}}>{service.visitingHour}</h5>
            <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam repellendus voluptatum in sint quis incidunt?</p>
            <h3>Cost: $ {service.fee}</h3>
            

            
        </div>
    );
};

export default ServiceDetail;