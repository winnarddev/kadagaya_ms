import React from 'react';
import { NavLink } from 'react-router-dom'


function SidebarNav() {
    return (

        <>
            <div className="sidebar">
                <ul className="nav navbar-nav flex-column">
                    <li className="nav-item pt-2 pb-2">
                        <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>
                    </li>
                    <li className="nav-item pt-2 pb-2">
                        <NavLink to="/cattle" activeClassName="active">Cattle</NavLink>
                    </li>
                    <li className="nav-item pt-2 pb-2">
                        <NavLink to="/milktally" activeClassName="active">Milk Tally</NavLink>
                    </li>
                    <li className="nav-item pt-2 pb-2">
                        <a href="/logout" activeClassName="active">Logout</a>
                    </li>
                </ul>
            </div>
        </>

    );
}

export default SidebarNav;


