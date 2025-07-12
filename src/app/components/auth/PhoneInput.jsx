"use client";

export default function PhoneInput({ phone, setPhone, countryCode, setCountryCode }) {
  return (
    <div>
      <label className="block mb-1 text-sm text-gray-600">Phone Number</label>
      <div className="flex space-x-2">
        <select
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          className="border rounded px-2 py-2 w-20 text-sm"
        >
          <option value="+91">+91</option>
          <option value="+1">+1</option>
          <option value="+44">+44</option>
        </select>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone"
          className="border rounded px-3 py-2 w-full text-sm"
          maxLength={10}
        />
      </div>
    </div>
  );
}
