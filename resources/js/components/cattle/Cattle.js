import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { Menu, Modal, Button, Form, Input, Select, DatePicker } from 'antd';
import { FileAddOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

import AddCattle from './AddCattle';

import ListCattle from './ListCattle';

import axios from 'axios';


const Cattle = () => {




    const [ListCattles, setListCattles] = React.useState([{}]);
    const [listLoading, setlistLoading] = React.useState(true);
    const [listFailure, setlistFailure] = React.useState(false);

    useEffect(() => {
        /*  const getTasks = async () => {
              const tasksFromServer = await fetchTasks()
              setListCattles(tasksFromServer)
              setlistLoading(false);
              /* setListCattles(
                   tasksFromServer.map((data) => data.name)
               )*/
        // }

        //getTasks() */

        axios.get('/api/cattles')
            .then(function (response) {
                // handle success
                setListCattles(response.data);
                setlistLoading(false);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setlistFailure(true)
            });

    }, [])

    const fetchTasks = async () => {
        const res = await fetch('/api/cattles')
        const data = await res.json()
        console.log(data);


        return data
    }




    return (
        <>
            <Menu mode="horizontal">
                <AddCattle />
            </Menu>

            <ListCattle list={ListCattles} listLoading={listLoading} listFailure={listFailure} />




        </>
    );

}

export default Cattle;


