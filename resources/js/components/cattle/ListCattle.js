import React, { useEffect, useState } from 'react';

import { Table, Alert, Divider } from 'antd';




const ListCattle = ({ list, listLoading, listFailure }) => {


    const columns = [
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
            title: 'Breed',
            dataIndex: 'breed',
            key: 'breed',
        },
    ];



    return (
        <>

            {console.log(list)}

            {listFailure == true ? (
                <Alert message="System Error. Please check internet connection" type="error" />
            ) : (

                listLoading == false ? (
                    list.length > 0 ? (<Table className="mt-3" rowKey="id" columns={columns} dataSource={list} />) : ('No results Found')
                ) : 'Loading..'

            )}


        </>
    );

}



export default ListCattle;