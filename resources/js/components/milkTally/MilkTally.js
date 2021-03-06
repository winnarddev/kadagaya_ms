import React, { useEffect, useState } from 'react';

import { Button, Menu } from 'antd';
import { FileAddOutlined } from '@ant-design/icons';

import AddMilkTally from './AddMilkTally'
import ListMilkTally from './ListMilkTally'


const MilkTally = () => {

    const [showAddMilkTally, setAddMilkTally] = React.useState(false);

    const [ListCattles, setListCattles] = React.useState([{}]);

    const [MilkTallyData, setMilkTallyData] = React.useState([]);

    const [loadingMilkTallyData, setoadingMilkTallyData] = React.useState(true);

    const [listFailure, setlistFailure] = React.useState(false);

    useEffect(() => {

        axios.get('/api/cattles')
            .then(function (response) {
                setListCattles(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        getMilkTally()

    }, [])

    const getMilkTally = () => {

        axios.get('/api/milktally')
            .then(function (response) {
                setMilkTallyData(response.data);
                setoadingMilkTallyData(false);
                setlistFailure(false);
            })
            .catch(function (error) {
                console.log(error);
                setlistFailure(true);
            });
    }



    const onAddSumbit = ({ cattle_id, date, am_qty, pm_qty }) => {

        axios.post('/api/milktally', {
            cattle_id, date, am_qty, pm_qty
        })
            .then(function (response) {

                setAddMilkTally(false);

                /* const recentlyAdded = response.data;
 
                 MilkTallyData.reverse();
 
                 setMilkTallyData([...MilkTallyData, recentlyAdded])*/
                getMilkTally()


                //console.log(recentlyAdded);
            })
            .catch(function (error) {
                console.log(error);
            });
        //  console.log('Success:', values);
    };

    const onUpdateSubmit = ({ id, cattle_id, date, am_qty, pm_qty }) => {


        axios.put(`/api/milktally/${id}`, {
            cattle_id, date, am_qty, pm_qty
        })
            .then(function (response) {

                setAddMilkTally(false);

                const recentlyAdded = response.data;

                const updatedMilkTallyData = MilkTallyData.map((data, key) => (

                    data.id == id ? recentlyAdded : data

                ))

                setMilkTallyData(updatedMilkTallyData);



            })
            .catch(function (error) {
                console.log(error);
            });
        //  console.log('Success:', values);
    }


    return (
        <>



            <Menu mode="horizontal">
                <Menu.Item key="add_milk_tally" icon={<FileAddOutlined />} onClick={() => setAddMilkTally(!showAddMilkTally)}>
                    Add Milk Tally
                </Menu.Item>

            </Menu>



            <AddMilkTally onAdd={() => setAddMilkTally(!showAddMilkTally)}
                showAdd={showAddMilkTally} ListCattles={ListCattles} onAddSumbit={onAddSumbit} onUpdateSubmit={onUpdateSubmit} />

            <ListMilkTally listData={MilkTallyData} loadingMilkTallyData={loadingMilkTallyData} listFailure={listFailure} />



        </>
    );

}

export default MilkTally;
