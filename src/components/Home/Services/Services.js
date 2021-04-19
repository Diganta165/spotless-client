import React, { useEffect, useState } from 'react';
import './Services.css'
import officeCleaning from '../../../images/office-cleaning.jpg'
import kitchenCleaning from '../../../images/kitchen-cleaning.jpg'
import furnitureCleaning from '../../../images/furniture-cleaning.jpg'
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import { useHistory } from 'react-router';



const Services = () => {
    const history = useHistory();
    const handleAppointment = () => {
        history.push('/appointment');
    }

    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('https://stark-woodland-89383.herokuapp.com/userServices')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data);
            })
    }, [])
    console.log('Services data', services)
    return (
        <section className="services-container">
            <div className="text-center">
                <h5 style={{ color: '#B2BEB5' }}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>

            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row">
                    {
                        services.map(service => <ServiceDetail  service={service}></ServiceDetail>)
                    }
                </div>
                <button onClick={handleAppointment}>Click Here to <br/>GET AN APPOINTMENT</button>

            </div>
        </section>
    );
};

export default Services;