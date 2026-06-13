// Central source of truth for business data, SEO, and structured data.
// Update values here and they propagate to schema, meta tags, footer, and pages.

export const SITE_URL = 'https://geopacks.in';

export const business = {
  name: 'Geopacks',
  legalName: 'Geopacks',
  tagline: 'PET Bottles, Jars, Caps & Preforms Manufacturer',
  foundedYear: 2014,
  phone: '+91 9751546565',
  phoneRaw: '919751546565',
  whatsapp: '919751546565',
  email: 'geopacks2015@gmail.com',
  address: {
    line1: 'Pollachi - Udumalpet Road',
    line2: 'Poolankinar',
    city: 'Pollachi',
    region: 'Tamil Nadu',
    country: 'India',
    countryCode: 'IN',
    postalCode: '642114',
  },
  geo: { lat: 10.6698669, lng: 77.0818273 },
  hours: 'Monday - Saturday: 9:00 AM - 5:00 PM',
  mapsShareUrl: 'https://share.google/E7CzVLaD94KBhXlP4',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.486236772718!2d77.08182737480834!3d10.6698669894732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8362677945d8b%3A0x6b80145260100f!2sPoolankinar%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1705384600000!5m2!1sen!2sin',
  // Paste your free key from https://web3forms.com (1 min, no backend needed).
  web3formsKey: 'ca056402-0231-4278-9560-786d9e23c717',
  // Fill these as you create them — they wire straight into footer + schema sameAs.
  social: {
    googleBusiness: '',
    instagram: '',
    facebook: '',
    linkedin: '',
  },
};

export const industries = [
  'Packaged Drinking Water',
  'Juice & Beverages',
  'Edible Oil',
  'Dairy & Ghee',
  'Food Products',
];

export const whatsappUrl = (message = "Hi Geopacks, I'm interested in your products") =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;

const fullAddress = `${business.address.line1}, ${business.address.line2}, ${business.address.city}, ${business.address.region}, ${business.address.country}`;

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: business.name,
  legalName: business.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  foundingDate: String(business.foundedYear),
  email: business.email,
  telephone: business.phone,
  description:
    'Geopacks manufactures food-grade PET bottles, jars, caps, and preforms for packaged water, juice, edible oil, and dairy industries since 2014.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${business.address.line1}, ${business.address.line2}`,
    addressLocality: business.address.city,
    addressRegion: business.address.region,
    postalCode: business.address.postalCode,
    addressCountry: business.address.countryCode,
  },
  sameAs: Object.values(business.social).filter(Boolean),
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Manufacturer',
  '@id': `${SITE_URL}/#localbusiness`,
  name: business.name,
  image: `${SITE_URL}/logo.png`,
  url: SITE_URL,
  telephone: business.phone,
  email: business.email,
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: fullAddress,
    addressLocality: business.address.city,
    addressRegion: business.address.region,
    postalCode: business.address.postalCode,
    addressCountry: business.address.countryCode,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: business.geo.lat,
    longitude: business.geo.lng,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '17:00',
  },
};
