import { Head } from 'vite-react-ssg';
import { SITE_URL, business } from '../../config/site';

const DEFAULT_OG = `${SITE_URL}/logo.png`;

const Seo = ({
  title,
  description,
  path = '/',
  image = DEFAULT_OG,
  type = 'website',
  schema,
}) => {
  const fullTitle = title
    ? `${title} | ${business.name}`
    : `${business.name} — ${business.tagline}`;
  const canonical = `${SITE_URL}${path === '/' ? '' : path}`;
  const schemas = Array.isArray(schema) ? schema : schema ? [schema] : [];

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={business.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Head>
  );
};

export default Seo;
