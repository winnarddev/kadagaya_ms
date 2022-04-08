import React from 'react';
import { NavLink } from 'react-router-dom'

import { Menu, Icon } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined, LoginOutlined, DashboardOutlined, UnorderedListOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

function SidebarNav() {
    return (

        <>

            <Menu
                style={{ width: '100%' }}
                defaultSelectedKeys={[location.pathname]}

                mode="inline"
                theme="dark"
            >

                <Menu.Item key="/dashboard" icon={<DashboardOutlined />}>
                    <NavLink to="/dashboard">
                        <span>Dashboard</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="/cattle" icon={<AppstoreOutlined />}>
                    <NavLink to="/cattle">
                        <span>Cattle</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="/milktally" icon={<UnorderedListOutlined />}>
                    <NavLink to="/milktally">
                        <span>Milk Tally</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="/logout" icon={<LoginOutlined />}>
                    <a href="/logout" >Logout</a>
                </Menu.Item>

            </Menu>

            {/* <div className="sidebar pt-3">
                <ul className="nav navbar-nav flex-column">
                    <li className="nav-item pt-2 pb-2">
                        <NavLink to="/dashboard" >Dashboard</NavLink>
                    </li>
                    <li className="nav-item pt-2 pb-2">
                        <NavLink to="/cattle" >Cattle</NavLink>
                    </li>
                    <li className="nav-item pt-2 pb-2">
                        <NavLink to="/milktally" >Milk Tally</NavLink>
                    </li>
                    <li className="nav-item pt-2 pb-2">
                        <a href="/logout" >Logout</a>
                    </li>
                </ul>
            </div>
    */}
        </>

    );
}

export default SidebarNav;


