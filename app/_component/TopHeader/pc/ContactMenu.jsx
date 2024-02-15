'use client'
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import Link from 'next/link';
import {linkLocation} from '@/config.js';

const items = [
    {
        key: '1',
        label: (
            <Link href={linkLocation['support@Ec-3.io']} target="_blank">support@Ec-3.io</Link>
        )
    },
];
const ContactMenu = ({className = ''}) => {
    return (
        <Dropdown className="drop-down" overlayClassName="drop-down__overlay" menu={{ items }} placement="bottom">
            <a onClick={(e) => e.preventDefault()}>
                <Space className="drop-down__text">
                    CONTACT
                    <DownOutlined className="drop-down__icon"  />
                </Space>
            </a>
        </Dropdown>
    );
}

export default ContactMenu;
