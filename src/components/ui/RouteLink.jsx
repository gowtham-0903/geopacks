import React from 'react';

const isModifiedClick = (event) =>
    event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;

const navigateTo = (path) => {
    const nextPath = path.startsWith('/') ? path : `/${path}`;
    if (window.location.pathname === nextPath) return;
    window.history.pushState({}, '', nextPath);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const RouteLink = ({ to, children, onClick, ...props }) => {
    const handleClick = (event) => {
        onClick?.(event);
        if (
            event.defaultPrevented ||
            event.button !== 0 ||
            isModifiedClick(event) ||
            props.target === '_blank' ||
            !to?.startsWith('/')
        ) {
            return;
        }
        event.preventDefault();
        navigateTo(to);
    };

    return (
        <a href={to} onClick={handleClick} {...props}>
            {children}
        </a>
    );
};

export default RouteLink;
