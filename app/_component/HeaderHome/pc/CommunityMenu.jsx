'use client'
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import {linkLocation} from '@/config.js';

const items = [
    {
        key: '1',
        label: (
            <a href={linkLocation['Discord']} target="_blank">Discord</a>
        )
    },
    {
        key: '2',
        label: (
            <a href={linkLocation['X']} target="_blank">X</a>
        )
    },
    {
        key: '3',
        label: (
            <a href={linkLocation['Telegram']} target="_blank">Telegram</a>
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
