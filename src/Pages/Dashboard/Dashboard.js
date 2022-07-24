import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="container-area">
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-0 overflow-y-auto w-40 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Appoinment</Link></li>
                        <li><Link to='/dashboard/review'>My Review</Link></li>
                        <li><Link to='/dashboard/users'>Users</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;