import React from 'react';

const OrderList = (props) => {
    console.log(props)
    return (
        <div className="col-md-4 mb-5">
            <h1>Yooooooooooooooooooooooooooooooooooooooooooooo</h1>
            <div className="card p-3">
                <div className="card-body text-center">
                    <h2>{props.order.name}</h2>
                    <h5 className="card-title text-brand">{props.order.service}</h5>
                    <h5>{props.order.phone}</h5>
                    <h3>Fee: $ {props.order.price}</h3>
                    <h6>{props.order.date}</h6>
                    
                   
                    
                </div>
            </div>
        </div>
    );
};

export default OrderList;