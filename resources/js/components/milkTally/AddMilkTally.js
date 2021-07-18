import React, { useEffect, useState } from 'react';

import { Menu, Modal, Button, Form, Input, Select, DatePicker, Row, Col } from 'antd';
import { FileAddOutlined } from '@ant-design/icons';

const AddMilkTally = ({ onAdd, showAdd, ListCattles, onAddSumbit, onUpdateSubmit }) => {

    const [dateformat, setDateformat] = React.useState(false);

    const [showQuantity, setshowQuantity] = React.useState({ 'visibility': 'hidden' });


    const [CattleValue, setCattleValue] = React.useState("");
    const [dateValue, setdateValue] = React.useState("");

    const [updateMilkTally, setupdateMilkTally] = React.useState(false);
    const [updateThisMilkTally, setupdateThisMilkTally] = React.useState(false);

    const a = "15";

    const [form] = Form.useForm();



    useEffect(() => {



    }, [])

    const formatDate = (date, dateString) => {
        setDateformat(dateString);


        setdateValue(dateString)
        checkRecord(CattleValue, dateString)
    };

    const setCattle = (e) => {

        setCattleValue(e)
        checkRecord(e, dateValue)

    }

    const checkRecord = (cattle, ddate) => {

        if (cattle !== "" && ddate !== "") {



            axios.get(`/api/milktally/check/${cattle}/${ddate}`).then(function (response) {

                if (response.data !== "") {

                    form.setFieldsValue({
                        am_qty: response.data.am_qty,
                        pm_qty: response.data.pm_qty
                    });
                    setupdateMilkTally(true)
                    setupdateThisMilkTally(response.data.id)
                } else {
                    setupdateMilkTally(false)
                }

                setshowQuantity({ 'visibility': 'visible' })

            }).catch(function (error) {
                console.log(error);
            });


        }

        form.setFieldsValue({
            am_qty: "",
            pm_qty: ""
        });



    }


    const onFinish = ({ cattle_id, am_qty, pm_qty }) => {

        const date = dateformat;

        const id = updateThisMilkTally;

        if (updateMilkTally == true) {
            onUpdateSubmit({ id, cattle_id, date, am_qty, pm_qty });
        } else {
            onAddSumbit({ cattle_id, date, am_qty, pm_qty });
        }

        form.resetFields();
        //  console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };






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
                width={600}

            >
                <Form
                    form={form}
                    name="add_milkTally"
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >

                    <Row>
                        <Col span={12}>
                            <Form.Item label="Cattle" className="widht-95" name="cattle_id" rules={[{ required: true, message: 'Cattle is required!' }]}>

                                <Select onChange={setCattle}>
                                    {ListCattles.map((cattle, index) => (
                                        <Select.Option value={cattle.id} key={index}>{cattle.name}</Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Date" name="date" rules={[{ required: true, message: 'Date is required!' }]}>
                                <DatePicker onChange={formatDate} className="widht-95" />
                            </Form.Item>

                        </Col>
                    </Row>

                    <Row style={showQuantity}>
                        <Col span={12}>
                            <Form.Item label="AM Quantity" className="widht-95" name="am_qty"  >
                                <Input type="number" min="0" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="PM Quantity" className="widht-95" name="pm_qty">
                                <Input type="number" min="0" />
                            </Form.Item>

                        </Col>
                    </Row>




                    {/*<Form.Item label="Session" name="session" rules={[{ required: true, message: 'Session is required!' }]}>
                        <Select >
                            <Select.Option value="AM">AM</Select.Option>
                            <Select.Option value="PM">PM</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Quantity" name="qty" rules={[{ required: true, message: 'Quantity is required!' }]}>
                        <Input type="number" min="0" />
                                    </Form.Item>*/}



                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>


                </Form>


            </Modal>


        </>
    );

}

export default AddMilkTally;

