import { SITE_URL } from './site';

export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: `${SITE_URL}${item.path === '/' ? '' : item.path}`,
  })),
});

export const productCatalogSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Geopacks PET Packaging Catalog',
  itemListElement: [
    'PET Bottles',
    'PET Jars',
    'PET Preforms',
    'Caps & Closures',
    'Custom Designs',
  ].map((name, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name,
      brand: { '@type': 'Brand', name: 'Geopacks' },
      category: 'PET Packaging',
    },
  })),
};
