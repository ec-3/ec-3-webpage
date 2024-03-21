import React from 'react'
import ReactDOM from 'react-dom/client'

import {Spin} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './index.scss';

let requestCount = 0
let startTime = 0

const LoadingContainer = (loadingText) => {
    return (
        <Spin tip={loadingText} size="large">
            <div className="content" />
        </Spin>
    )
}

const LoadingPC = {
    start: (loadingText='Loading') => {
        if (requestCount === 0) {
            startTime = new Date().getTime()
            var dom = document.createElement('div')
            dom.setAttribute('class', 'loading-ec3')
            document.body.appendChild(dom)
            const root = ReactDOM.createRoot(dom)
            root.render(LoadingContainer(loadingText))
        }
        requestCount++
    },

    stop: () => {
        requestCount--
        if (requestCount === 0) {
            const endTime = new Date().getTime()
            const timer = endTime - startTime >= 100 ? 0 : 100
            setTimeout(() => {
                const dom = document.querySelector('.loading-ec3')
                dom && dom.parentNode && dom.parentNode.removeChild(dom)
            }, timer)
        }
    }
}

export default LoadingPC
