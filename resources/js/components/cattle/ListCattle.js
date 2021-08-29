import React, { useEffect, useState } from 'react';

import { Table, Alert, Spin } from 'antd';




const ListCattle = ({ list, listLoading, listFailure }) => {


    const columns = [
        {
            title: 'Tag',
            dataIndex: 'tag',
            key: 'tag',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Origin',
            dataIndex: 'origin',
            key: 'origin',
        },
        {
            title: 'Breed',
            dataIndex: 'breed',
            key: 'breed',
        },

        {
            title: 'Date of Birth',
            dataIndex: 'dateofbirth',
            key: 'dateofbirth',
        },
    ];



    return (
        <>

            {listFailure == true ? (
                <Alert message="System Error. Please check internet connection" type="error" />
            ) : (

                listLoading == false ? (
                    list.length > 0 ? (<Table className="mt-3" rowKey="id" columns={columns} dataSource={list} />) : ('No results Found')
                ) : <Spin />

            )}


        </>
    );

}



export default ListCattle;