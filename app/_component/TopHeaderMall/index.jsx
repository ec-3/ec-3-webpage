'use client'
import React, {useState, useRef, useEffect} from 'react';

const TopHeaderMall = () => {
    return (
        <header className="header" id="headerEle">
            <h1 className="hide">Ec cube shopping</h1>
            <div className="fixed-center">
                <div className="menu">
                    <a className="menu-item" href="./index.html">HOME</a>
                    <a className="menu-item">PRODUCT</a>
                    <a className="menu-item" href="https://stake.ec-cube.io/" target="_blank">STAKING</a>
                </div>
                <a href="./index.html" className="logo-link extend-click">
                    <img alt="logo" src="./images/logo.png"/>
                </a>
                <div className="menu">
                    <a className="menu-item">APP</a>
                    <a className="menu-item" href="mailto:support@Ec-3.io" target="_blank">SUPPORT</a>
                    <a className="menu-item"><i className="icon icon-cart"></i><sup className="badge">2</sup></a>
                </div>
            </div>
        </header>
    );

};
export default TopHeaderMall;
