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
                    /*list.length > 0 ? (<Table className="mt-3" rowKey="id" columns={columns} dataSource={list} />) : ('No results Found')*/
                    <table className="table mt-2">

                        <thead>
                            <tr>
                                <td>Tag</td>
                                <td>Name</td>
                                <td>Gender</td>
                                <td>Origin</td>
                                <td>Breed</td>
                                <td>Date of Birth</td>
                            </tr>
                        </thead>

                        <tbody>

                            {list.map((data, key) => (

                                <tr key={key}>


                                    <td>{data.tag}</td>
                                    <td>{data.name}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.origin}</td>
                                    <td>{data.breed}</td>
                                    <td>{data.dateofbirth}</td>
                                    <td><a href={`cattle/profile/${data.id}`}>View</a></td>

                                </tr>

                            ))}

                        </tbody>

                    </table>
                ) : <Spin />

            )}


        </>
    );

}



export default ListCattle;