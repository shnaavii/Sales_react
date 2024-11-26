"use client"// pages/customer-requirement-form.js
import { useState } from 'react';
 import { createClient } from "@supabase/supabase-js";

  const supabase = createClient("https://ixtslbdqunbjjoxenemg.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4dHNsYmRxdW5iampveGVuZW1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI0NDgwNTgsImV4cCI6MjA0ODAyNDA1OH0.4Jtt02Uhuu55D0JLzXrK62ZVWMjWi8WDYm--hzM1-FI");

const CustomerRequirementForm = () => {
  const [customerName, setCustomerName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [budget, setBudget] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('customer_requirements')
      .insert([{ customer_name: customerName, contact_info: contactInfo, budget:budget }]);

    if (error) {
      alert(error.message);
    } else {
      alert('Requirement submitted successfully!');
    }
  };

  return (
  <div className=" w-100 bgi pt-5 pb-5" style={{ height: '665px'}}>
    <form onSubmit={handleSubmit} className="container p-4 card pt-5 rounded shadow w-50">
      <h1>Customer Requirement Form</h1>
      <input type="text" className="mb-3 form-control" placeholder="Customer Name"  value={customerName} onChange={(e) => setCustomerName(e.target.value)} required />
      <input type="text" className="mb-3 form-control" placeholder="Contact Information" value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} required  />
      <input type="number" className="mb-4 form-control" placeholder="Budget Range" value={budget} onChange={(e) => setBudget(e.target.value)} required  />
	  <p className="text-center">
		<button type="submit" className="m-3 w-50 btn btn-secondary p-2">Submit Requirement</button>
		</p>
    </form>
	</div>
  );
};

export default CustomerRequirementForm;