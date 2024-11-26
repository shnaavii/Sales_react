// components/VehicleSelection.js
import { useEffect, useState } from 'react';
import { supabase } from '@/Components/Client_supabase';

const VehicleSelection = ({ onSelect }) => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      const { data, error } = await supabase.from('vehicles').select('*');
      if (error) {
        console.error('Error fetching vehicles:', error);
      } else {
        setVehicles(data);
      }
    };
    fetchVehicles();
  }, []);

  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">Select a vehicle</option>
      {vehicles.map((vehicle) => (
        <option key={vehicle.id} value={vehicle.id}>
          {vehicle.name} - {vehicle.model}
        </option>
      ))}
    </select>
  );
};

export default VehicleSelection;