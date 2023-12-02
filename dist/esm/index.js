import { useState, useEffect } from 'react';

const useCloseOnClickOutside = (ref) => {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsActive(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
    return [isActive, setIsActive];
};

export { useCloseOnClickOutside as default };
