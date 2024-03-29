import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    const menuItem = <>
        {/* menu-link class defination in index.css */}
        <li><Link className='menu-link' to="/">Home</Link></li>
        <li><Link className='menu-link' to="/appoinment">Appointment</Link></li>
        <li><Link className='menu-link' to="/reviews">Reviews</Link></li>
        <li><Link className='menu-link' to="/contact">Contact Us</Link></li>
        <li><Link className='menu-link' to="/about">About</Link></li>
        {user && <li><Link className='menu-link' to="/dashboard">Dashboard</Link></li>}
        <li>{user ? <Link className='menu-link' to="/" onClick={logout}>Sign Out</Link> : <Link className='menu-link' to="/login">Login</Link>}</li>
    </>
    return (
        <div className="container-area">
            <div className="navbar bg-base-100 px-0">
                <div className="navbar-start w-3/5 lg:w-1/5">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <Link to='/' className="text-[18px] font-normal">Doctors Portal</Link>
                </div>
                <div className="navbar-end w-4/5 hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
                <div className="navbar-end w-2/5 lg:hidden">
                    <ul className="menu menu-horizontal p-0">
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;