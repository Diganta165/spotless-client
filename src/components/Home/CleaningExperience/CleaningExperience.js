import React from 'react';
import cleaningExperience from '../../../images/cleaning-experience.jpg'
import './CleaningExperience.css'

const CleaningExperience = () => {
    return (
        <main style={{height:'800px'}} className="row d-flex justify-content-center align-items-center ">
            <div className="col-md-6">
                <img src={cleaningExperience} alt="" className="img-fluid"/>
            </div>
            
            <div className="col-md-4 offset-md-1">
                <h3>Welcome To <br/>Cleaning Company</h3>
                <h5>Founded in <br/> <span className="highlight-color">2020</span></h5>
                <h1>We Have the <br/>Best People & <br/>Equipment</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, dolores? Totam nisi ab sit expedita!</p>
                <button className="btn btn-primary">DISCOVER MORE</button>
            </div>
            

        </main>
    );
};

export default CleaningExperience;