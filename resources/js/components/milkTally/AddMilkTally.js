import React, { useEffect, useState } from 'react';

import { Menu, Modal, Button, Form, Input, Select, DatePicker, } from 'antd';
import { FileAddOutlined } from '@ant-design/icons';

const AddMilkTally = ({ onAdd, showAdd, ListCattles }) => {

    console.log(ListCattles);
    return (
        <>
            <Modal
                title="Add Milk Tally"
                visible={showAdd}
                //onOk={submitForm}
                //   okText="Add Milk Tally"
                // confirmLoading={confirmLoading}
                onCancel={onAdd}
                footer={null}

            >
                <Form
                    name="basic"
                    layout="vertical"
                // onFinish={onFinish}
                //   onFinishFailed={onFinishFailed}
                >

                    <Form.Item label="Cattle" name="cattle_id" rules={[{ required: true, message: 'Cattle is required!' }]}>
                        <Select>
                            {ListCattles.map((cattle, index) => (
                                <Select.Option value={cattle.id} key={index}>{cattle.name}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item label="Date" name="date" rules={[{ required: true, message: 'Date is required!' }]}>
                        <DatePicker />
                    </Form.Item>

                    <Form.Item label="Session" name="session" rules={[{ required: true, message: 'Session is required!' }]}>
                        <Select >
                            <Select.Option value="AM">AM</Select.Option>
                            <Select.Option value="PM">PM</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Quantity" name="qty" rules={[{ required: true, message: 'Quantity is required!' }]}>
                        <Input type="number" min="0" />
                    </Form.Item>



                    <Button type="primary" htmlType="submit">
                        Submit
                </Button>


                </Form>


            </Modal>


        </>
    );

}

export default AddMilkTally;
