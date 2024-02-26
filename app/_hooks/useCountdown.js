import React, { useState, useMemo, useEffect } from 'react';

const START_TIME = new Date('2024-04-01 00:00:00').getTime();
const duration = parseInt((START_TIME - Date.now()) / 1000);

const useCountdown = () => {
    // 倒计时：秒
    const [time, setTime] = useState(duration);

    // 根据倒计时的秒，显示可视化的日期
    const formatTime = useMemo(() => {
        const days = (Math.floor(time / (60 * 60 * 24)) + '').padStart(2, '0');
        const hours = (Math.floor((time % (60 * 60 * 24)) / (60 * 60)) + '').padStart(2, '0');
        const minutes = (Math.floor((time % (60 * 60)) / 60) + '').padStart(2, '0');
        const seconds = (time % 60 + '').padStart(2, '0');
        return `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
    }, [time]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(curTime => curTime - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return [time, formatTime];
};

export default useCountdown;
