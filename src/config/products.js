// Full product catalog — single source of truth for the Products page and schema.
// NOTHING here is omitted on the page; every row renders.

export const bottleRows = [
  { sn: 1, type: 'Round Bottle (Juice)', capacity: '200 ml', weight: '11.5 g', neck: '28 mm' },
  { sn: 2, type: 'Round Bottle (Juice)', capacity: '500 ml', weight: '22.5 g', neck: '28 mm' },
  { sn: 3, type: 'Round Bottle (Juice)', capacity: '600 ml', weight: '22.5 g', neck: '28 mm' },
  { sn: 4, type: 'Round Bottle (Juice)', capacity: '1000 ml', weight: '35 g', neck: '28 mm' },
  { sn: 5, type: 'Round Bottle (Water)', capacity: '300 ml', weight: '10 g', neck: '28 mm' },
  { sn: 6, type: 'Round Bottle (Water)', capacity: '500 ml', weight: '13 g', neck: '28 mm' },
  { sn: 7, type: 'Round Bottle (Water)', capacity: '1000 ml', weight: '19.5 g', neck: '-' },
  { sn: 8, type: 'Round Bottle (Water)', capacity: '2000 ml', weight: '34 g', neck: '-' },
  { sn: 9, type: 'Round Bottle (Oil)', capacity: '250 ml', weight: '22.5 g', neck: '-' },
  { sn: 10, type: 'Round Bottle (Oil)', capacity: '500 ml', weight: '33 g', neck: '-' },
  { sn: 11, type: 'Round Bottle (Oil)', capacity: '1000 ml', weight: '48 g', neck: '-' },
  { sn: 12, type: 'Round Bottle (Oil)', capacity: '500 ml', weight: '19.5 g', neck: '-' },
  { sn: 13, type: 'Round Bottle (Oil)', capacity: '1000 ml', weight: '34 g', neck: '-' },
  { sn: 14, type: 'Round Bottle', capacity: '200 ml', weight: '15 g', neck: '-' },
  { sn: 15, type: 'Round Bottle', capacity: '250 ml', weight: '13 g', neck: '-' },
  { sn: 16, type: 'Liquor Bottle', capacity: '500 ml', weight: '19 g', neck: '25 mm' },
];

export const roundJarRows = [
  { sn: 1, type: 'Round Jar', capacity: '100 ml', weight: '11 g', neck: '38 mm' },
  { sn: 2, type: 'Round Jar', capacity: '250 ml', weight: '21 g', neck: '56 mm' },
];

export const squareJarRows = [
  { sn: 1, type: 'Square Jar', capacity: '250 ml', weight: '21 g', neck: '56 mm' },
  { sn: 2, type: 'Square Jar', capacity: '1000 ml', weight: '40 g', neck: '83 mm' },
];

export const waterPreforms = [
  { itemNo: '01', name: '13 GMS ALASKA', neckDia: '28' },
  { itemNo: '02', name: '19.60 GMS ALASKA', neckDia: '28' },
  { itemNo: '03', name: '34 GMS ALASKA', neckDia: '28' },
  { itemNo: '04', name: '38 GMS ALASKA', neckDia: '28' },
  { itemNo: '05', name: '110 GMS ALASKA', neckDia: '46' },
];

export const juiceAndCsdPreforms = [
  { itemNo: '06', name: '11.4 GMS SHORT NECK', neckDia: '28' },
  { itemNo: '07', name: '11.50 GMS SHORT NECK', neckDia: '28' },
  { itemNo: '08', name: '11.70 GMS SHORT NECK', neckDia: '28' },
  { itemNo: '09', name: '23 GMS LONG NECK', neckDia: '28' },
  { itemNo: '10', name: '25 GMS LONG NECK', neckDia: '28' },
  { itemNo: '11', name: '35.60 GMS SHORT NECK', neckDia: '28' },
];

export const roppPreforms = [
  { itemNo: '12', name: '14 GMS', neckDia: '25' },
  { itemNo: '13', name: '19 GMS', neckDia: '25' },
  { itemNo: '14', name: '22 GMS', neckDia: '28' },
  { itemNo: '15', name: '24 GMS', neckDia: '28' },
  { itemNo: '16', name: '31.50 GMS', neckDia: '28' },
  { itemNo: '17', name: '33 GMS', neckDia: '28' },
  { itemNo: '18', name: '37 GMS', neckDia: '30' },
  { itemNo: '19', name: '40 GMS', neckDia: '30' },
  { itemNo: '20', name: '43 GMS', neckDia: '30' },
  { itemNo: '21', name: '48 GMS', neckDia: '30' },
  { itemNo: '22', name: '56 GMS', neckDia: '30' },
];

export const jarPreforms = [
  { itemNo: '23', name: '11 GMS', neckDia: '38' },
  { itemNo: '24', name: '21 GMS', neckDia: '56' },
  { itemNo: '25', name: '24 GMS', neckDia: '56' },
  { itemNo: '26', name: '40 GMS', neckDia: '83' },
  { itemNo: '27', name: '66 GMS', neckDia: '100' },
];

// Counts for stats / headings (derived, never hand-typed).
export const counts = {
  bottles: bottleRows.length,
  jars: roundJarRows.length + squareJarRows.length,
  preforms:
    waterPreforms.length +
    juiceAndCsdPreforms.length +
    roppPreforms.length +
    jarPreforms.length,
};

// Product overview cards (Home + Services reference).
export const productCards = [
  {
    title: 'PET Bottles',
    desc: 'High-quality bottles from 200 ml to 2 litre for water, juice, and oil applications.',
    icon: 'bottle',
  },
  {
    title: 'PET Jars',
    desc: 'Wide-mouth jars ideal for dairy, pickles, powders, and food storage.',
    icon: 'jar',
  },
  {
    title: 'Caps & Closures',
    desc: 'Tamper-proof caps engineered for secure sealing and durability.',
    icon: 'cap',
  },
  {
    title: 'PET Preforms',
    desc: 'Strong, consistent preforms for reliable bottle blowing — 27 specifications.',
    icon: 'preform',
  },
  {
    title: 'Custom Designs',
    desc: 'Unique bottle shapes tailored to your brand identity and filling line.',
    icon: 'custom',
  },
  {
    title: 'Printing Services',
    desc: 'High-quality branding with screen and offset printing.',
    icon: 'print',
  },
];
