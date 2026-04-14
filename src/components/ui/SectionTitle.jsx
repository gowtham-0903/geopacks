import React from 'react';

const SectionTitle = ({ subtitle, title, alignment = 'left', className = '', subtitleClassName = '', titleClassName = '', lineClassName = '' }) => {
    const alignClass = alignment === 'center' ? 'text-center' : 'text-left';
    const lineClass = alignment === 'center' ? 'mx-auto' : 'mr-auto';

    return (
        <div className={`mb-12 ${alignClass} ${className}`}>
            {subtitle && (
                <span className={`reveal text-primary font-semibold tracking-[0.15em] uppercase text-xs md:text-sm mb-3 block ${subtitleClassName}`}>
                    {subtitle}
                </span>
            )}
            <h2 className={`reveal text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight ${titleClassName}`} data-delay="90">
                {title}
            </h2>
            <div className={`reveal h-1 w-20 bg-accent rounded-full ${lineClass} ${lineClassName}`} data-delay="150"></div>
        </div>
    );
};

export default SectionTitle;
