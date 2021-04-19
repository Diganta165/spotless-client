import React from 'react';
import windowCleaning from '../../../images/window-cleaning.jpg'

const HeaderMain = () => {
    return (
        <main style={{height:'700px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1>We Clean to<br/>Keep You Healthy</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, dolores? Totam nisi ab sit expedita!</p>
                <button className="btn btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={windowCleaning} alt="" className="img-fluid"/>
            </div>

        </main>
    );
};

export default HeaderMain;