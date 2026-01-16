import React from 'react';

const SectionTitle = ({ subtitle, title, alignment = 'left', className = '' }) => {
    const alignClass = alignment === 'center' ? 'text-center' : 'text-left';
    const lineClass = alignment === 'center' ? 'mx-auto' : 'mr-auto';

    return (
        <div className={`mb-12 ${alignClass} ${className}`}>
            {subtitle && (
                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {title}
            </h2>
            <div className={`h-1 w-20 bg-primary rounded-full ${lineClass}`}></div>
        </div>
    );
};

export default SectionTitle;
