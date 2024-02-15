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
            <Link href={linkLocation['Discord']} target="_blank">Discord</Link>
        )
    },
    {
        key: '2',
        label: (
            <Link href={linkLocation['X']} target="_blank">X</Link>
        )
    },
    {
        key: '3',
        label: (
            <Link href={linkLocation['Telegram']} target="_blank">Telegram</Link>
        )
    },
];
const CommunityMenu = ({className = ''}) => {
    return (
        <Dropdown className="drop-down" overlayClassName="drop-down__overlay" menu={{ items }} placement="bottom">
            <a onClick={(e) => e.preventDefault()}>
                <Space className="drop-down__text">
                    COMMUNITY
                    <DownOutlined className="drop-down__icon"  />
                </Space>
            </a>
        </Dropdown>
    );
}

export default CommunityMenu;
