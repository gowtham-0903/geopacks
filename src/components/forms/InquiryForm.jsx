import { useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { business } from '../../config/site';

const productTypes = ['PET Bottles', 'PET Preforms', 'PET Jars', 'Caps & Closures', 'Custom Design'];
const products = ['200 ml Bottle', '300 ml Bottle', '500 ml Bottle', '1 Litre Bottle', '2 Litre Bottle'];

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

const inputClass =
  'w-full rounded-xl border border-steel-200 bg-white px-4 py-3 text-ink-900 outline-none transition-all placeholder:text-ink-800/40 focus:border-accent focus:ring-2 focus:ring-accent/30';

const InquiryForm = ({ submitLabel = 'Send Inquiry' }) => {
  const [status, setStatus] = useState('idle'); // idle | error | sending | success
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const required = ['fullName', 'companyName', 'phone', 'email', 'productType', 'quantity', 'location', 'requirements'];
    const firstMissing = required.find((f) => !formData[f]);
    if (firstMissing) {
      setStatus('error');
      const el = e.currentTarget.querySelector(`[name="${firstMissing}"]`);
      if (el) el.focus();
      return;
    }

    setStatus('sending');

    const payload = {
      access_key: business.web3formsKey,
      subject: `Geopacks Inquiry — ${formData.productType}`,
      from_name: `${formData.fullName} (${formData.companyName})`,
      replyto: formData.email,
      'Full Name': formData.fullName,
      'Company Name': formData.companyName,
      'Phone Number': formData.phone,
      'Email Address': formData.email,
      'Product Type': formData.productType,
      'Selected Product': formData.selectedProduct || '-',
      'Quantity Required': formData.quantity,
      'Preferred Delivery Location': formData.location,
      'Additional Requirements': formData.requirements,
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData(initialState);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const sending = status === 'sending';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <input required name="fullName" autoComplete="name" value={formData.fullName} onChange={handleChange} placeholder="Full Name" className={inputClass} />
        <input required name="companyName" autoComplete="organization" value={formData.companyName} onChange={handleChange} placeholder="Company Name" className={inputClass} />
        <input required type="tel" inputMode="tel" name="phone" autoComplete="tel" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className={inputClass} />
        <input required type="email" inputMode="email" name="email" autoComplete="email" spellCheck={false} value={formData.email} onChange={handleChange} placeholder="Email Address" className={inputClass} />
        <select required name="productType" value={formData.productType} onChange={handleChange} className={inputClass}>
          <option value="">Select Product Type</option>
          {productTypes.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
        <select name="selectedProduct" value={formData.selectedProduct} onChange={handleChange} className={inputClass}>
          <option value="">Select Product (optional)</option>
          {products.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
        <input required name="quantity" inputMode="numeric" value={formData.quantity} onChange={handleChange} placeholder="Quantity Required" className={inputClass} />
        <input required name="location" autoComplete="address-level2" value={formData.location} onChange={handleChange} placeholder="Preferred Delivery Location" className={inputClass} />
      </div>

      <textarea
        required
        name="requirements"
        value={formData.requirements}
        onChange={handleChange}
        rows={5}
        placeholder="Additional Requirements"
        className={inputClass}
      />

      <div aria-live="polite">
        {status === 'error' && (
          <p className="flex items-center gap-2 text-sm text-red-600">
            <AlertCircle className="h-4 w-4" aria-hidden="true" /> Please fill all required fields and try again.
          </p>
        )}
        {status === 'success' && (
          <p className="flex items-center gap-2 text-sm font-medium text-accent-dark">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> Thank you — your inquiry has been sent to Geopacks.
          </p>
        )}
      </div>

      <button type="submit" disabled={sending} className="btn-accent w-full disabled:opacity-70 md:w-auto">
        {sending ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Sending…
          </>
        ) : (
          <>
            {submitLabel} <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
};

export default InquiryForm;
