import React, { useEffect, useState } from 'react';
import { Alert, Spin } from 'antd';



const ListMilkTally = ({ listData, loadingMilkTallyData, listFailure }) => {

    return (
        <div>
            {loadingMilkTallyData}

            {listFailure == true ? (
                <Alert message="System Error. Please check internet connection" type="error" />
            ) : (

                loadingMilkTallyData == false ? (
                    listData.length > 0 ? (
                        <table className="table mt-2">

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
                                        <td>{data.am_qty ? (data.am_qty) : ("-")}</td>
                                        <td>{data.pm_qty ? (data.pm_qty) : ("-")}</td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>
                    ) : ('No results Found')
                ) : <Spin size="large" />

            )}






        </div>

    );

}
//<Table columns={columns} rowKey="id" dataSource={listData} />
export default ListMilkTally;
