import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return(
        <nav className='ui raised very padded segment'>
            <a className='ui teal inverted segment'>Appolo Hospitals </a>
            <div className='ui right floated header'>
                <button className='ui button'>
                    <Link to="/home">Home</Link>
                </button>
                <button className='ui button'>
                    <Link to="/patient">Patients</Link>
                </button>
                <button className='ui button'>
                    <Link to="/doctor">Doctors</Link>
                </button>
                 <button className='ui button'>
                    <Link to="/appointment">Appointments</Link>
                </button>
            </div>
        </nav>
    )
}
export default Navbar