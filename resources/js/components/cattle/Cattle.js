import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Menu, Modal, Button, Form, Input, Select, DatePicker } from 'antd';
import { FileAddOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';


const Cattle = () => {

    const { current } = useState(current)

    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [modalText, setModalText] = React.useState('Content of the modal');

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };


    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    const onOk = () => {
        form.submit();
    };



    return (
        <>
            <Menu mode="horizontal">
                <Menu.Item key="mail" onClick={showModal} icon={<FileAddOutlined />}>
                    Add Cattle
                </Menu.Item>
            </Menu>


            <Modal
                title="Add Cattle"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <Form layout="vertical">

                    <Form.Item label="Tag">
                        <Input name="tag" />
                    </Form.Item>

                    <Form.Item label="Name">
                        <Input name="name" />
                    </Form.Item>

                    <Form.Item label="Date of Birh">
                        <DatePicker name="dateofbirth" />
                    </Form.Item>

                    <Form.Item label="Origin">
                        <Input name="origin" />
                    </Form.Item>

                    <Form.Item label="Breed">
                        <Input name="breed" />
                    </Form.Item>

                    <Form.Item label="Gender">
                        <Select name="gender">
                            <Option value="Female">Female</Option>
                            <Option value="Male">Male</Option>
                        </Select>
                    </Form.Item>

                    <Button htmlType="submit"> Add </Button>

                </Form>


            </Modal>
        </>
    );

}

export default Cattle;


