import { Reveal } from './Motion';

const SectionTitle = ({
  subtitle,
  title,
  alignment = 'left',
  className = '',
  subtitleClassName = '',
  titleClassName = '',
  dark = false,
}) => {
  const alignClass = alignment === 'center' ? 'text-center' : 'text-left';
  const lineAlign = alignment === 'center' ? 'mx-auto' : '';

  return (
    <div className={`mb-12 ${alignClass} ${className}`}>
      {subtitle && (
        <Reveal as="span" y={14} className={`kicker mb-4 ${subtitleClassName}`}>
          <span className="h-px w-6 bg-accent" />
          {subtitle}
        </Reveal>
      )}
      <Reveal
        as="h2"
        delay={0.06}
        className={`text-3xl font-extrabold leading-[1.1] md:text-4xl lg:text-[2.9rem] ${
          dark ? 'text-white' : 'text-ink-900'
        } ${titleClassName}`}
      >
        {title}
      </Reveal>
      <Reveal
        delay={0.14}
        y={10}
        className={`mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-accent-bright ${lineAlign}`}
      />
    </div>
  );
};

export default SectionTitle;
