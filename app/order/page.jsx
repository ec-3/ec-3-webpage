'use client'
import React, {useState} from 'react';
import Link from 'next/link';
import {Form, Input, Button, Radio, Space, Alert, Checkbox} from 'antd';
import { LockOutlined } from '@ant-design/icons'
import './page.scss';

export default function order() {
    const [freight, setFreight] = useState(1);                      // 物流方式
    const [paytype, setPaytype] = useState(1);                      // 支付方式
    const [isDisableSubmit, setIsDisableSubmit] = useState(false);  // 是否禁用提交按钮

    const isAgreeOnChange = (e) => {
        setIsDisableSubmit(!(e.target.checked));
    };

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    return (
        <main className="main">
            <hgroup className="title-group">
                <div className="ret-breadcrumb">
                    <Link className="link" href="/mall" shallow><i className="icon icon-return"></i></Link>
                </div>
                <h2 className="title">Please fill in the order information</h2>
            </hgroup>
            <Form rootClassName="form-wrapper" layout="vertical" autoComplete="off" onFinish={onFinish}>
                <div className="form-main">
                    <div className="inline">
                        <Form.Item
                            label="First name"
                            name="firstName"
                            rules={[
                                {required: true, whitespace: true, message: 'First name is required!'},
                                {max: 20, whitespace: true, message: 'First name cannot exceed 20 characters!'},
                            ]}
                        >
                            <Input size="large" allowClear placeholder="Please input first name"/>
                        </Form.Item>
                        <Form.Item
                            label="Last name"
                            name="lastName"
                            rules={[
                                {required: true, whitespace: true, message: 'Last name is required!'},
                                {max: 20, whitespace: true, message: 'Last name cannot exceed 20 characters!'},
                            ]}
                        >
                            <Input size="large" allowClear placeholder="Please input last name"/>
                        </Form.Item>
                    </div>
                    <Form.Item
                        label="Company name"
                        name="company"
                        rules={[
                            {min: 2, whitespace: true, message: 'Company name must be at least 2 characters!'},
                            {max: 100, whitespace: true, message: 'Company name cannot exceed 100 characters!'},
                        ]}
                    >
                        <Input size="large" allowClear placeholder="Please input company name"/>
                    </Form.Item>
                    <Form.Item
                        label="Country / Region"
                        name="country"
                        rules={[
                            {required: true, whitespace: true, message: 'Country / Region is required!'},
                            {min: 2, whitespace: true, message: 'Country / Region must be at least 2 characters!'},
                            {max: 20, whitespace: true, message: 'Country / Region cannot exceed 20 characters!'},
                        ]}
                    >
                        <Input size="large" allowClear placeholder="Please input country / region"/>
                    </Form.Item>
                    <Form.Item
                        label="Provice"
                        name="provice"
                        rules={[
                            {required: true, whitespace: true, message: 'Provice is required!'},
                            {min: 2, whitespace: true, message: 'Street must be at least 2 characters!'},
                            {max: 40, whitespace: true, message: 'Street cannot exceed 40 characters!'},
                        ]}
                    >
                        <Input size="large" allowClear placeholder="Please input provice"/>
                    </Form.Item>
                    <Form.Item
                        label="Town / City"
                        name="city"
                        rules={[
                            {required: true, whitespace: true, message: 'Town / City is required!'},
                            {min: 2, whitespace: true, message: 'Town / City must be at least 2 characters!'},
                            {max: 40, whitespace: true, message: 'Town / City cannot exceed 40 characters!'},
                        ]}
                    >
                        <Input size="large" allowClear placeholder="Please input town / city"/>
                    </Form.Item>
                    <Form.Item
                        label="Street"
                        name="street"
                        rules={[
                            {required: true, whitespace: true, message: 'Street is required!'},
                            {min: 2, whitespace: true, message: 'Street must be at least 2 characters!'},
                            {max: 100, whitespace: true, message: 'Street cannot exceed 100 characters!'},
                        ]}
                    >
                        <Input size="large" allowClear placeholder="Please input street"/>
                    </Form.Item>
                    <Form.Item
                        label="Address"
                        name="address"
                        rules={[
                            {required: true, whitespace: true, message: 'Address is required!'},
                            {min: 2, whitespace: true, message: 'Address must be at least 2 characters!'},
                            {max: 100, whitespace: true, message: 'Address cannot exceed 100 characters!'},
                        ]}
                    >
                        <Input size="large" allowClear placeholder="Apartment,suite,unit,etc."/>
                    </Form.Item>
                    <Form.Item
                        label="Postcode / ZIP"
                        name="postcode"
                        rules={[
                            {required: true, whitespace: true, message: 'Postcode / ZIP is required!'},
                            {min: 2, whitespace: true, message: 'Postcode / ZIP must be at least 2 characters!'},
                            {max: 20, whitespace: true, message: 'Postcode / ZIP cannot exceed 20 characters!'},
                        ]}
                    >
                        <Input size="large" allowClear placeholder="Apartment,suite,unit,etc."/>
                    </Form.Item>
                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[
                            {required: true, whitespace: true, message: 'Phone is required!'},
                            {min: 2, whitespace: true, message: 'Phone must be at least 2 characters!'},
                            {max: 20, whitespace: true, message: 'Phone cannot exceed 20 characters!'},
                        ]}
                    >
                        <Input size="large" allowClear placeholder="Apartment,suite,unit,etc."/>
                    </Form.Item>
                    <Form.Item
                        label="E-mail"
                        name="email"
                        rules={[
                            {type: 'email', whitespace: true, message: 'The input is not valid E-mail!'},
                            {required: true, whitespace: true, message: 'E-mail is required!'},
                        ]}
                    >
                        <Input size="large" allowClear placeholder="Apartment,suite,unit,etc."/>
                    </Form.Item>
                </div>
                <div className="form-other">
                    <div className="summary">
                        <div className="summary-item">
                            <span className="summary-item__label">Subtotal</span>
                            <span className="summary-item__value">$299.00</span>
                        </div>
                        <div className="freight">
                            <div className="freight-title">Shipping</div>
                            <Radio.Group onChange={e => setFreight(e.target.value)} value={freight}>
                                <Radio value={1}>Free shipping</Radio>
                            </Radio.Group>
                        </div>
                        <div className="summary-item weight">
                            <span className="summary-item__label">Total</span>
                            <span className="summary-item__value">$299.00</span>
                        </div>
                    </div>
                    <div className="pay-type">
                        <Radio.Group onChange={e => setPaytype(e.target.value)} value={paytype}>
                            <Space direction="vertical">
                                <Radio value={1}>Coinbase Commerce Payment Gateway</Radio>
                            </Space>
                        </Radio.Group>
                    </div>
                    <Alert className="agreement" message="Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy." type="warning" />
                    <Checkbox className="is-agree" onChange={isAgreeOnChange} defaultChecked={true}>Terms and conditions</Checkbox>
                    <Form.Item className="btn-group">
                        <Button type="primary" htmlType="submit" disabled={isDisableSubmit} danger size="large" block icon={<i className="icon icon-lock" />}>Place order</Button>
                    </Form.Item>
                </div>
            </Form>


        </main>
    );
}
