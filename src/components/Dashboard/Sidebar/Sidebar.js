import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faComment, faHome, faGripHorizontal, faUserPlus, faUsers, faPlusCircle, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';
import AddComment from '../AddComment/AddComment';
import AddServices from '../Dashboard/AddServices/AddServices';
import Admin from '../Admin/Admin';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);

    useEffect(() => {
        fetch('https://stark-woodland-89383.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])


    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    const [modalIsOpen1, setIsOpen1] = useState(false);
    function openModal1() {
        setIsOpen1(true);
    }
    function closeModal1() {
        setIsOpen1(false);
    }

    const [adminModalIsOpen, setAdminIsOpen] = useState(false);
    function adminOpenModal() {
        setAdminIsOpen(true);
    }
    function adminCloseModal() {
        setAdminIsOpen(false);
    }
    

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/admin" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <button onClick={openModal} className="btn btn-brand text-uppercase">
                        <FontAwesomeIcon icon={faComment} /> <span>Comment</span>
                    </button>
                    <AddComment modalIsOpen={modalIsOpen} closeModal={closeModal}></AddComment>
                </li>
                {
                    isAdmin && <div>
                        <li>
                            <Link to="/allOrders" className="text-white">
                                <FontAwesomeIcon icon={faGlobe} /> <span>All Orders</span>
                            </Link>
                        </li>
                        <li>
                            <button onClick={openModal1} className="btn btn-brand text-uppercase">
                                <FontAwesomeIcon icon={faPlusCircle} /> <span>Add Service</span>
                            </button>
                            <AddServices modalIsOpen1={modalIsOpen1} closeModal1={closeModal1}></AddServices>
                        </li>

                        <li>
                            <button onClick={adminOpenModal} className="btn btn-brand text-uppercase">
                                <FontAwesomeIcon icon={faPlusCircle} /> <span>Add Admin</span>
                            </button>
                            <Admin adminModalIsOpen={adminModalIsOpen} adminCloseModal={adminCloseModal}></Admin>
                        </li>
                    </div>
                }
                
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;