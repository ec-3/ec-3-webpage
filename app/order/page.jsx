'use client'
import React, {useState, useMemo} from 'react';
import Link from 'next/link';
import {Form, Input, Button, Radio, Space, Alert, Checkbox, InputNumber, Modal} from 'antd';
import LoadingPC from '@/_component/LoadingPC';
import OrderApi from '@/_api/OrderApi.js';
import './page.scss';

// 单价
const UNIT_PRICE = 299;

export default function Order() {
    const [count, setCount] = useState(1);                          // 购买数量
    const [freight, setFreight] = useState(1);                      // 物流方式
    const [paytype, setPaytype] = useState(1);                      // 支付方式
    const [isDisableSubmit, setIsDisableSubmit] = useState(false);  // 是否禁用提交按钮

    const amount = useMemo(() => {
        return UNIT_PRICE * count;
    }, [count]);

    const amountFormat = useMemo(() => {
        return amount.toLocaleString("en-us");
    }, [amount]);

    const isAgreeOnChange = e => {
        setIsDisableSubmit(!(e.target.checked));
    };

    const onCountChange = value => {
        setCount(value);
    };

    const onFinish = values => {
        console.log(values)
        Modal.warn({
            wrapClassName: 'error-handle',
            width: 600,
            title: 'Coming Soon',
            content: `The sales function has not yet started, please stay tuned.`,
            okType: 'danger',
            okText: 'I know',
            centered: true,
            maskClosable: true
        });
        return false;

        LoadingPC.start();
        const params = {
            Name: values.firstName + values.lastName,
            Company: values.company,
            Country: values.country,
            Province: values.province,
            City: values.city,
            Street: values.street,
            Address: values.address,
            ZipCode: values.zipCode,
            Phone: values.phone,
            Email: values.email,
            Details: {default: count},
            Amount: amount,
            SuccURL: 'https://www.ec-cube.io/order/success',
            CancelURL: 'https://www.ec-cube.io/mall',
        };
        OrderApi.createOrder(params).then(d => {
            LoadingPC.stop();
            location.replace(d);
        }).catch(e => {
            LoadingPC.stop();
            Modal.warn({
                wrapClassName: 'error-handle',
                width: 600,
                title: 'An error occurred',
                content: `Order placement failed: ${e} .`,
                okType: 'danger',
                okText: 'I know',
                centered: true,
                maskClosable: true
            });
        })

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
                        label="Province"
                        name="province"
                        rules={[
                            {required: true, whitespace: true, message: 'Province is required!'},
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
                        name="zipCode"
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
                    <div className="count">
                        <label className="count-label">Count</label>
                        <InputNumber min={1} defaultValue={count} step={1}
                                     formatter={value => Math.ceil(value)}
                                     parser={value => Math.ceil(value)}
                                     onChange={onCountChange} changeOnWheel size="large"/>
                    </div>
                    <div className="summary">
                        <div className="summary-item">
                            <span className="summary-item__label">Subtotal</span>
                            <span className="summary-item__value">$ {amountFormat}</span>
                        </div>
                        <div className="freight">
                            <div className="freight-title">Shipping</div>
                            <Radio.Group onChange={e => setFreight(e.target.value)} value={freight}>
                                <Radio value={1}>Free shipping</Radio>
                            </Radio.Group>
                        </div>
                        <div className="summary-item weight">
                            <span className="summary-item__label">Total</span>
                            <span className="summary-item__value">$ {amountFormat}</span>
                        </div>
                    </div>
                    <div className="pay-type">
                        <Radio.Group onChange={e => setPaytype(e.target.value)} value={paytype}>
                            <Space direction="vertical">
                                <Radio value={1}>Coinbase Commerce Payment Gateway</Radio>
                            </Space>
                        </Radio.Group>
                    </div>
                    <Alert className="agreement"
                           message="Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy."
                           type="warning"/>
                    <Checkbox className="is-agree" onChange={isAgreeOnChange} defaultChecked={true}>Terms and
                        conditions</Checkbox>
                    <Form.Item className="btn-group">
                        <Button type="primary" htmlType="submit" disabled={isDisableSubmit} danger size="large" block
                                icon={<i className="icon icon-lock"/>}>Place order</Button>
                    </Form.Item>
                </div>
            </Form>
        </main>
    );
}
