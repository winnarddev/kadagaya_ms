import React, { useEffect, useState } from 'react';

import { Table } from 'antd';

const ListMilkTally = ({ listData, loadingMilkTallyData }) => {

    console.log(listData);

    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Name',
            dataIndex: ['cattle', 'name'],
            key: 'name',
        },
        {
            title: 'AM Qty',
            dataIndex: 'am_qty',
            key: 'am_qty',
        },
        {
            title: 'PM Qty',
            dataIndex: 'pm_qty',
            key: 'pm_qty',
        },
    ];

    return (
        <>
            {loadingMilkTallyData}

            <table className="table">

                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Date</td>
                        <td>Name</td>
                        <td>AM Qty</td>
                        <td>PM Qty</td>
                    </tr>
                </thead>

                <tbody>

                    {listData.map((data, key) => (

                        <tr key={key}>


                            <td>{data.id}</td>
                            <td>{data.date}</td>
                            <td>{data.cattle.name}</td>
                            <td>{data.am_qty}</td>
                            <td>{data.pm_qty}</td>

                        </tr>

                    ))}

                </tbody>

            </table>



        </>

    );

}
//<Table columns={columns} rowKey="id" dataSource={listData} />
export default ListMilkTally;
