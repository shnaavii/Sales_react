"use client"
import React, { useState , useEffect} from 'react';
import jsPDF from 'jspdf';
 import { createClient } from "@supabase/supabase-js";

  const supabase = createClient("https://ixtslbdqunbjjoxenemg.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4dHNsYmRxdW5iampveGVuZW1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI0NDgwNTgsImV4cCI6MjA0ODAyNDA1OH0.4Jtt02Uhuu55D0JLzXrK62ZVWMjWi8WDYm--hzM1-FI");

const QuotationPage = () => {
    const [vehicleName, setVehicleName] = useState('');
    const [vehiclePrice, setVehiclePrice] = useState('');
    const [taxes, setTaxes] = useState(0);
    const [Discount, setDiscount] = useState(0);
    const [finalPrice, setFinalPrice] = useState(0);

    const calculateFinalPrice = () => {
        const price = parseFloat(vehiclePrice) || 0;
        const taxAmount = (price * taxes) / 100;
        const discountAmount = parseFloat(Discount) || 0;
        const final = price + taxAmount - discountAmount;
        setFinalPrice(final.toFixed(2));
    };

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.text("Quotation", 20, 10);
        doc.text(`Vehicle Name: ${vehicleName}`, 20, 20);
        doc.text(`Vehicle Price: $${vehiclePrice}`, 20, 30);
        doc.text(`Taxes: $${(vehiclePrice * taxes / 100).toFixed(2)}`, 20, 40);
        doc.text(`Discount: $${Discount}`, 20, 50);
        doc.text(`Final Price: $${finalPrice}`, 20, 60);
        doc.save("quotation.pdf");
    };
	
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
	  
    const fetchVehicles = async () => {
      const { data, error } = await supabase.from('vechiles').select('*');
      if (error) {
        console.error('Error fetching vehicles:', error);
      } else {
        setVehicles(data);
      }
    };
	  
    fetchVehicles();
   
  }, []);
	 async function ddd(e) {
		e.preventDefault()
		const { mydata ,error} = await supabase.from("quotations").insert([{ price: vehiclePrice ,final_price: finalPrice,discount:Discount,taxes:taxes,vehicle_name:vehicleName}]).select();
       
		console.log(mydata);
		if (error) {
		alert(error.message);
		} else {
		alert('Requirement submitted successfully!');
		}
	}
    return (
	<div className=" w-100 bgi2 pt-5 pb-5" style={{ height: '100%'}}>
        <div className="qform container mt-5 card mb-5 w-50 ">
            <h1 className="text-center m-3">Quotation Page</h1>
            <form onSubmit={ddd} className="container p-3">
				<select onChange={(e) => e.target.value} className="form-control mb-3">
					<option value="">Select a vehicle</option>
					{vehicles.map((vehicle) => (
						<option key={vehicle.id} value={vehicle.id} onChange={(e) => setVehicleName(vehicle.name)}>
						{vehicle.name} - {vehicle.model}
						
						</option>
					))}
				</select>
                
                
               
                <input type="number" className="form-control mb-3" placeholder="Vehicle Price" value={vehiclePrice} onChange={(e) => setVehiclePrice(e.target.value)} required />
                
                <label>Taxes (%)</label>
                <input type="number"  value={taxes} className="form-control mb-3" placeholder="taxes" onChange={(e) => setTaxes(e.target.value)} required />
                
                <label>Discount</label>
                <input type="number" value={Discount} className="form-control mb-3" placeholder="Discount"onChange={(e) => setDiscount(e.target.value)} />
                <p className="text-center">
					<button type="button" className="button" onClick={calculateFinalPrice}>Calculate Final Price</button>
                </p>
                <h2 className="text-center">Final Price: ${finalPrice}</h2>
				<p className="text-center">
					<button type="button" className=" button btn m-4" onClick={generatePDF}>Generate PDF</button>
				  <button type="submit" className=" button btn btn-secondary m-3">submit</button>
				</p>
				
              
            </form>
        </div>
       </div>
    );
};

export default QuotationPage;