import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import OrderList from './OrderList/OrderList';
import './AllOrders.css'

const containerStyle = {
    // position:"absolute",
    // right:0,
    backgroundColour: 'seaGreen',
    // backgroundColour: '#F4FDFB',
    height:"100%"
}

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    

    useEffect(() => {
        fetch('https://stark-woodland-89383.herokuapp.com//allTheOrders')
        .then(res=> res.json())
        .then(data => {
            setOrders(data)
            console.log('json data', data)
        })
    },[])
    console.log(orders)
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 order-list">
                    {
                        orders.map(order => <OrderList order={order}></OrderList>)
                    }
                </div>
            </div>
        </section>
    );
};

export default AllOrders;