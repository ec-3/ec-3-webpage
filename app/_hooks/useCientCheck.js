import React, { useState, useEffect } from 'react';

const useClientCheck = () => {
    const [isMobile, setIsMobile] = useState(null);

    useEffect(() => {
        const result = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        setIsMobile(result)
    }, []);

    return isMobile;
};

export default useClientCheck;
