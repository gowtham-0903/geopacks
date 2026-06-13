import { Link } from 'vite-react-ssg';

// Internal links render as real <a> tags (good for SEO + prerender) and use the
// router for client-side navigation. External / hash links fall back to <a>.
const RouteLink = ({ to, children, ...props }) => {
  const isInternal = typeof to === 'string' && to.startsWith('/');

  if (!isInternal) {
    return (
      <a href={to} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
};

export default RouteLink;
