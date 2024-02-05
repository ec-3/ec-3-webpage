import React, { useRef, useEffect } from 'react';

const useScrollAnimate = ({offset, imgHalfHeight, top}) => {
    const scrollRef = useRef(null);

    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        if (top) {
            return rect.top <= top;
        }
        const winHeight = (window.innerHeight || document.documentElement.clientHeight);
        let offsetComputed = 0;
        if (offset != null) {
            offsetComputed = offset;
        } else if (imgHalfHeight != null) {
            offsetComputed = winHeight / 2 - imgHalfHeight;
        } else {
            offsetComputed = winHeight / 2;
        }
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= winHeight - offsetComputed &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    useEffect(() => {
        const handleScroll = (e) => {
            const elements = scrollRef.current.querySelectorAll('.animate__animated');
            elements.forEach(element => {
                const isInViewport = isElementInViewport(element);
                if (isInViewport) {
                    const animateClass = element.getAttribute('data-animate');
                    element.classList.add('animate__animated', animateClass);
                }
            });
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollRef;
};

export default useScrollAnimate;
