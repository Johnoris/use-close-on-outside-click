'use strict';

var react = require('react');

const useCloseOnClickOutside = (ref) => {
    const [isActive, setIsActive] = react.useState(false);
    react.useEffect(() => {
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

module.exports = useCloseOnClickOutside;
