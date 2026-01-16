import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    className = '',
    icon: Icon,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/30",
        secondary: "bg-white text-primary border-2 border-primary hover:bg-primary-50",
        outline: "border-2 border-white text-white hover:bg-white/10",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
            {Icon && <Icon className="ml-2 w-5 h-5" />}
        </button>
    );
};

export default Button;
