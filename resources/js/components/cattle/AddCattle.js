import React, { useState, useEffect } from 'react';

import { Menu, Modal, Button, Form, Input, Select, DatePicker, } from 'antd';
import { FileAddOutlined } from '@ant-design/icons';

import axios from 'axios';


const AddCattle = () => {



    const { current } = useState(current)


    const [confirmLoading, setConfirmLoading] = React.useState(false);


    const [AddCattleForm, setAddCattleForm] = React.useState(false);


    const [dateformat, setDateformat] = React.useState(false);


    const showAddCattleForm = () => {
        setAddCattleForm(true);
    };


    const submitForm = (values) => {
        console.log('Success:', values);


        setConfirmLoading(true);
        /*setTimeout(() => {
            setAddCattleForm(false);
            setConfirmLoading(false);
        }, 2000);*/
    };


    const handleCancel = () => {
        setAddCattleForm(false);

    };

    const onOk = () => {
        form.submit();
    };

    const formatDate = (date, dateString) => {
        setDateformat(dateString);
    };

    const onFinish = ({ tag, name, origin, breed, gender }) => {


        const dateofbirth = dateformat;


        axios.post('/api/cattles', {
            tag, name, origin, breed, gender, dateofbirth
        })
            .then(function (response) {

                setAddCattleForm(false);

                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        //  console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <>


            <Menu.Item key="mail" onClick={showAddCattleForm} icon={<FileAddOutlined />}>
                Add Cattle
            </Menu.Item>


            <Modal
                title="Add Cattle"
                visible={AddCattleForm}
                onOk={submitForm}
                okText="Add Cattle"
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={null}

            >
                <Form
                    name="basic"
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >


                    <Form.Item label="Tag" name="tag">
                        <Input />
                    </Form.Item>

                    <Form.Item label="Name" name="name" >
                        <Input />
                    </Form.Item>

                    <Form.Item label="Date of Birh" name="dateofbirth" rules={[{ required: true, message: 'Date of birth is required!' }]}>
                        <DatePicker onChange={formatDate} />
                    </Form.Item>

                    <Form.Item label="Origin" name="origin">
                        <Input />
                    </Form.Item>

                    <Form.Item label="Breed" name="breed" >
                        <Input />
                    </Form.Item>

                    <Form.Item label="Gender" name="gender" rules={[{ required: true, message: 'Gender is required!' }]}>
                        <Select >
                            <Select.Option value="Female">Female</Select.Option>
                            <Select.Option value="Male">Male</Select.Option>
                        </Select>
                    </Form.Item>

                    <Button type="primary" htmlType="submit">
                        Submit
                </Button>


                </Form>


            </Modal>
        </>
    );

}

export default AddCattle;