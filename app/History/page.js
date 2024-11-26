"use client"
import React, { useState ,useEffect} from 'react';
import { createClient } from "@supabase/supabase-js";

  const supabase = createClient("https://ixtslbdqunbjjoxenemg.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4dHNsYmRxdW5iampveGVuZW1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI0NDgwNTgsImV4cCI6MjA0ODAyNDA1OH0.4Jtt02Uhuu55D0JLzXrK62ZVWMjWi8WDYm--hzM1-FI");

	


const HistoryPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
	 const [mockData, setMockData] = useState([]);

	
	 useEffect(() => {
    const fetchDataa = async () => {
		const { data, error } = await supabase.from('customer_requirements').select('*');
		if (error) {
			console.error('Error fetching vehicles:', error);
		} else {
			setMockData(data);
			setFilteredData(data);
		}
	}
	 fetchDataa();
	
  }, []);
      const [filteredData, setFilteredData] = useState(mockData);
    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);

        const filtered = mockData.filter(item => 
            item.customer_name.toLowerCase().includes(value) 
			// || 
            // item.date.includes(value)
        );
        setFilteredData(filtered);
    };


    return (
	  <div className=" w-100 bgi3 pt-5 pb-5" style={{ height: '665px'}}>
        <div className="history-page container mt-5 rounded p-3 bg-light">
            <h1 className="text-center m-3">History of Requirements and Quotations</h1>
            <input type="text" className="form-control m-1 mb-5"  placeholder="Search by customer name or date"value={searchTerm}
                onChange={handleSearch}   />
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th className="p-3">ID</th>
                        <th className="p-3">Customer Name</th>
                        <th className="p-3">Contact</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.customer_name}</td>
                            <td>{item.contact_info}</td>
                           
                        </tr>
                    ))}
                </tbody>
            </table>
			
        </div>
      </div>
    );
};

export default HistoryPage;