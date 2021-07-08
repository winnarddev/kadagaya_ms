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
                        <NavLink to="/test1" activeClassName="active">Test</NavLink>
                    </li>
                    <li className="nav-item pt-2 pb-2">
                        <NavLink to="/test2" activeClassName="active">Test</NavLink>
                    </li>
                </ul>
            </div>
        </>

    );
}

export default SidebarNav;


