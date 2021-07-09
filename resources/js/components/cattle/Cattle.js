import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Menu, Modal, Button, Form, Input, Select, DatePicker } from 'antd';
import { FileAddOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

import AddCattle from './AddCattle';



const Cattle = () => {


    const [AddCattleForm, setAddCattleForm] = React.useState(false);


    const showAddCattleForm = () => {
        setAddCattleForm(true);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setAddCattleForm(false);

    };






    return (
        <>
            <Menu mode="horizontal">
                <AddCattle open={AddCattleForm} onCancel={handleCancel} />
            </Menu>




        </>
    );

}

export default Cattle;


