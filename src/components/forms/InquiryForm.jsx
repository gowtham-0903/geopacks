import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Button from '../ui/Button';

const productTypes = [
    'PET Bottles',
    'PET Preforms',
    'PET Jars',
    'Caps & Closures',
    'Custom Design',
];

const products = [
    '200 ml Bottle',
    '300 ml Bottle',
    '500 ml Bottle',
    '1 Litre Bottle',
    '2 Litre Bottle',
];

const initialState = {
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    productType: '',
    selectedProduct: '',
    quantity: '',
    location: '',
    requirements: '',
};

const InquiryForm = ({ submitLabel = 'Send Inquiry' }) => {
    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState(initialState);

    const handleChange = (event) => {
        setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const requiredFields = ['fullName', 'companyName', 'phone', 'email', 'productType', 'quantity', 'location', 'requirements'];
        const hasMissing = requiredFields.some((field) => !formData[field]);

        if (hasMissing) {
            setStatus('error');
            return;
        }

        const subject = `Geopacks Inquiry - ${formData.productType}`;
        const body = [
            `Full Name: ${formData.fullName}`,
            `Company Name: ${formData.companyName || '-'}`,
            `Phone Number: ${formData.phone}`,
            `Email Address: ${formData.email}`,
            `Product Type: ${formData.productType}`,
            `Selected Product: ${formData.selectedProduct}`,
            `Quantity Required: ${formData.quantity}`,
            `Preferred Delivery Location: ${formData.location}`,
            `Additional Requirements: ${formData.requirements || '-'}`,
        ].join('\n');

        window.location.href = `mailto:geopacks2015@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setStatus('success');
        setFormData(initialState);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input required name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
                <input required name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
                <input required name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
                <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
                <select required name="productType" value={formData.productType} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
                    <option value="">Select Product Type</option>
                    {productTypes.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
                <select name="selectedProduct" value={formData.selectedProduct} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
                    <option value="">Select Product</option>
                    {products.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
                <input required name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Quantity Required" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
                <input required name="location" value={formData.location} onChange={handleChange} placeholder="Preferred Delivery Location" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
            </div>

            <textarea
                required
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                rows={5}
                placeholder="Additional Requirements"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />

            {status === 'error' && <p className="text-red-500 text-sm">Please fill all required fields (Select Product is optional).</p>}
            {status === 'success' && <p className="text-green-600 text-sm">Your email app is opening with the inquiry details.</p>}

            <Button type="submit" className="w-full md:w-auto" icon={Send}>
                {submitLabel}
            </Button>
        </form>
    );
};

export default InquiryForm;
