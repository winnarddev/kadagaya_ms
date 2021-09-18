import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Alert, Spin } from 'antd';
import { Row, Col, Table } from 'antd';




const CattleProfile = ({ id }) => {

    const [milkTallyLoading, setmilkTallyLoading] = React.useState(true);
    const [milkTallyFailure, setmilkTallyFailure] = React.useState(false);
    const [milkTally, setmilkTally] = React.useState({});
    const [milkTallyPagination, setmilkTallyPagination] = React.useState({
        current: 1,
        pageSize: 30,
        total: 0,
    });

    useEffect(() => {

        axios.get(`/api/milktally/getcattlemilktally/${id}?page=${milkTallyPagination.current}&limit=${milkTallyPagination.pageSize}`)
            .then(function (response) {
                // handle success
                setmilkTally(response.data);
                setmilkTallyLoading(false);

                setmilkTallyPagination({
                    current: response.data.current_page,
                    pageSize: response.data.per_page,
                    total: response.data.total,
                });

            })
            .catch(function (error) {
                // handle error                
                setmilkTallyFailure(true)
            });



    }, [])


    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'AM',
            dataIndex: 'am_qty',
            key: 'am_qty',
        },
        {
            title: 'PM',
            dataIndex: 'pm_qty',
            key: 'pm_qty',
        },
    ];

    const handleTableChange = (pagination) => {

        axios.get(`/api/milktally/getcattlemilktally/${id}?page=${pagination.current}&limit=${milkTallyPagination.pageSize}`)
            .then(function (response) {
                // handle success                
                setmilkTally(response.data);
                setmilkTallyLoading(false);

                setmilkTallyPagination({
                    current: response.data.current_page,
                    pageSize: response.data.per_page,
                    total: response.data.total,
                });

            })
            .catch(function (error) {
                // handle error                
                setmilkTallyFailure(true)
            });

    }


    return (
        <div>

            {milkTallyFailure == true ? (
                <Alert message="System Error. Please check internet connection" type="error" />
            ) : (

                milkTallyLoading == false ? (
                    <div>
                        <h4>Milk Tally</h4>
                        <Table
                            rowKey={milkTally.data.id}
                            columns={columns}
                            dataSource={milkTally.data}
                            pagination={milkTallyPagination}
                            size="small"
                            onChange={handleTableChange}
                        />

                    </div>

                ) : (
                    <Spin size="large" />
                )

            )}


        </div>

    );

}

export default CattleProfile;
