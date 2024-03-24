'use client'
import React from 'react';
import Link from 'next/link';
import {Button} from 'antd';
import './page.scss';

const ReturnIcon = function () {
    return (
        <i className="icon icon-return-curved"></i>
    );
};

export default function OrderSuccess() {
    return (
        <main className="main">
            <div className="fixed-center">
                <div className="status">
                    <i className="icon icon-success"></i>
                </div>
                <h2 className="title">Information</h2>
                <p className="desc">The order has been successfully created.</p>
                <div className="btn-group">
                    <Button type="primary" size="large" icon={<ReturnIcon/>} href="/mall">To the mall page</Button>
                </div>
            </div>
        </main>
    );
}
