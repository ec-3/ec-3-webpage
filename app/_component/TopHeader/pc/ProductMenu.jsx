'use client'
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Popconfirm } from 'antd';
import Link from 'next/link';
import {linkLocation} from '@/config.js';

const items = [
    {
        key: '1',
        label: (
            <Popconfirm
                rootClassName="coming-soon pc"
                title="Coming Soon"
                description="This feature is currently under development and will be launched soon."
                okText="Cancel"
                okType="default"
            >
                <a>Ec³ cube</a>
            </Popconfirm>
        )
    },
    {
        key: '2',
        label: (
            <a href={linkLocation['Staking']}>Staking</a>
        )
    },
];
const DevelopersMenu = ({className = ''}) => {
    return (
        <Dropdown className="drop-down" overlayClassName="drop-down__overlay" menu={{ items }} placement="bottom">
            <a onClick={(e) => e.preventDefault()}>
                <Space className="drop-down__text">
                    PRODUCT
                    <DownOutlined className="drop-down__icon"  />
                </Space>
            </a>
        </Dropdown>
    );
}

export default DevelopersMenu;
