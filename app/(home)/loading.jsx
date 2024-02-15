'use client'
import React from 'react'
import { SpinLoading } from 'antd-mobile'

export default function Loading() {
    return (
        <div style={{
            'position': 'fixed',
            'left': 0,
            'right': 0,
            'top': 0,
            'bottom': 0,
            'display': 'flex',
            'alignItems': 'center',
            'justifyContent': 'center'
        }}>
            <SpinLoading color='primary' style={{ '--size': '48px' }} />
        </div>
    );
}
