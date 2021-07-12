import React, { useEffect, useState } from 'react';

import { Button } from 'antd';
import { FileAddOutlined } from '@ant-design/icons';

import AddMilkTally from './AddMilkTally'

const MilkTally = () => {

    const [showAddMilkTally, setAddMilkTally] = React.useState(false);

    const [ListCattles, setListCattles] = React.useState([{}]);

    useEffect(() => {

        axios.get('/api/cattles')
            .then(function (response) {
                setListCattles(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [])


    return (
        <>


            <Button type="primary" icon={<FileAddOutlined />} onClick={() => setAddMilkTally(!showAddMilkTally)}>
                Add Milk Tally
            </Button>

            <AddMilkTally onAdd={() => setAddMilkTally(!showAddMilkTally)}
                showAdd={showAddMilkTally} ListCattles={ListCattles} />



        </>
    );

}

export default MilkTally;
