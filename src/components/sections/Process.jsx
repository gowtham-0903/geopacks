import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import RouteLink from '../ui/RouteLink';

const bottleRows = [
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

const roundJarRows = [
    { sn: 1, type: 'Round Jar', capacity: '100 ml', weight: '11 g', neck: '38 mm' },
    { sn: 2, type: 'Round Jar', capacity: '250 ml', weight: '21 g', neck: '56 mm' },
];

const squareJarRows = [
    { sn: 1, type: 'Square Jar', capacity: '250 ml', weight: '21 g', neck: '56 mm' },
    { sn: 2, type: 'Square Jar', capacity: '1000 ml', weight: '40 g', neck: '83 mm' },
];

const waterPreforms = [
    { itemNo: '01', name: '13 GMS ALASKA', neckDia: '28' },
    { itemNo: '02', name: '19.60 GMS ALASKA', neckDia: '28' },
    { itemNo: '03', name: '34 GMS ALASKA', neckDia: '28' },
    { itemNo: '04', name: '38 GMS ALASKA', neckDia: '28' },
    { itemNo: '05', name: '110 GMS ALASKA', neckDia: '46' },
];

const juiceAndCsdPreforms = [
    { itemNo: '06', name: '11.4 GMS SHORT NECK', neckDia: '28' },
    { itemNo: '07', name: '11.50 GMS SHORT NECK', neckDia: '28' },
    { itemNo: '08', name: '11.70 GMS SHORT NECK', neckDia: '28' },
    { itemNo: '09', name: '23 GMS LONG NECK', neckDia: '28' },
    { itemNo: '10', name: '25 GMS LONG NECK', neckDia: '28' },
    { itemNo: '11', name: '35.60 GMS SHORT NECK', neckDia: '28' },
];

const roppPreforms = [
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

const jarPreforms = [
    { itemNo: '23', name: '11 GMS', neckDia: '38' },
    { itemNo: '24', name: '21 GMS', neckDia: '56' },
    { itemNo: '25', name: '24 GMS', neckDia: '56' },
    { itemNo: '26', name: '40 GMS', neckDia: '83' },
    { itemNo: '27', name: '66 GMS', neckDia: '100' },
];

const ProductTable = ({ rows }) => (
    <div className="overflow-x-auto">
        <table className="w-full min-w-[740px] text-left">
            <thead>
                <tr className="bg-primary text-white">
                    <th className="px-4 py-3 rounded-l-lg">S.No</th>
                    <th className="px-4 py-3">Product Type</th>
                    <th className="px-4 py-3">Capacity (ML)</th>
                    <th className="px-4 py-3">Weight (g)</th>
                    <th className="px-4 py-3 rounded-r-lg">Neck (mm)</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((row) => (
                    <tr key={`${row.type}-${row.sn}`} className="border-b border-gray-200 last:border-none">
                        <td className="px-4 py-3 font-medium">{row.sn}</td>
                        <td className="px-4 py-3">{row.type}</td>
                        <td className="px-4 py-3">{row.capacity}</td>
                        <td className="px-4 py-3">{row.weight}</td>
                        <td className="px-4 py-3">{row.neck}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const PreformTable = ({ rows, title, isLast = false }) => (
    <div className={`premium-card bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm ${isLast ? 'mb-10' : 'mb-8'}`}>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left">
                <thead>
                    <tr className="bg-primary text-white">
                        <th className="px-4 py-3 rounded-l-lg">Item No.</th>
                        <th className="px-4 py-3">Preform Type</th>
                        <th className="px-4 py-3 rounded-r-lg">Neck Dia (mm)</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={`${row.itemNo}-${row.name}`} className="border-b border-gray-200 last:border-none">
                            <td className="px-4 py-3 font-medium">{row.itemNo}</td>
                            <td className="px-4 py-3">{row.name}</td>
                            <td className="px-4 py-3">{row.neckDia}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const Process = () => {
    const [activeCategory, setActiveCategory] = useState('bottles');

    return (
        <section className="section-shell pt-32 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-4xl mx-auto mb-12 reveal">
                    <SectionTitle alignment="center" subtitle="Products" title="Available Products" />
                </div>

                <div className="reveal mb-10 flex flex-wrap gap-3 justify-center">
                    <button
                        type="button"
                        onClick={() => setActiveCategory('bottles')}
                        className={`px-6 py-2.5 rounded-xl font-semibold transition-all ${activeCategory === 'bottles'
                            ? 'bg-primary text-white shadow-lg shadow-primary/20'
                            : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
                            }`}
                    >
                        Bottles
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveCategory('jars')}
                        className={`px-6 py-2.5 rounded-xl font-semibold transition-all ${activeCategory === 'jars'
                            ? 'bg-primary text-white shadow-lg shadow-primary/20'
                            : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
                            }`}
                    >
                        Jars
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveCategory('preforms')}
                        className={`px-6 py-2.5 rounded-xl font-semibold transition-all ${activeCategory === 'preforms'
                            ? 'bg-primary text-white shadow-lg shadow-primary/20'
                            : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
                            }`}
                    >
                        Preforms
                    </button>
                </div>

                {activeCategory === 'bottles' && (
                    <div className="premium-card bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm mb-10">
                        <h3 className="text-2xl font-bold mb-4">Bottles</h3>
                        <ProductTable rows={bottleRows} />
                    </div>
                )}

                {activeCategory === 'jars' && (
                    <>
                        <div className="premium-card bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm mb-8">
                            <h3 className="text-2xl font-bold mb-4">Round Jar</h3>
                            <ProductTable rows={roundJarRows} />
                        </div>

                        <div className="premium-card bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm mb-10">
                            <h3 className="text-2xl font-bold mb-4">Square Jar</h3>
                            <ProductTable rows={squareJarRows} />
                        </div>
                    </>
                )}

                {activeCategory === 'preforms' && (
                    <>
                        <PreformTable rows={waterPreforms} title="Water Preforms" />
                        <PreformTable rows={juiceAndCsdPreforms} title="Juice and CSD Preforms" />
                        <PreformTable rows={roppPreforms} title="ROPP Preforms" />
                        <PreformTable rows={jarPreforms} title="Jar Preforms" isLast={true} />
                    </>
                )}

                <RouteLink
                    to="/contact"
                    className="reveal inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/30 transition-all hover:scale-[1.03]"
                >
                    Contact Us <ArrowRight className="ml-2 w-5 h-5" />
                </RouteLink>
            </div>
        </section>
    );
};

export default Process;
