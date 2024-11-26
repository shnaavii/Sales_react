 "use client"
 import { useEffect, useState } from "react";
  import { createClient } from "@supabase/supabase-js";
import Link from 'next/link';

import { useNavigate } from 'react-router-dom';
  const supabase = createClient("https://ixtslbdqunbjjoxenemg.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4dHNsYmRxdW5iampveGVuZW1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI0NDgwNTgsImV4cCI6MjA0ODAyNDA1OH0.4Jtt02Uhuu55D0JLzXrK62ZVWMjWi8WDYm--hzM1-FI");

  function App() {
	 const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState([]);
  const [isMatch, setIsMatch] = useState(false);
  
	useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('users') 
        .select('email, password'); 

      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setUserData(data);
      }
    };

    fetchData();
	
  }, []);

   const handleInputChange = (event) => {
	   event.preventDefault();
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  
  const compareCredentials = () => {
	// event.preventDefault();
    const matchFound = userData.some((user) => 
      user.email === email && user.password === password
    );
    if (matchFound) {
		 // window.location.href = '/About';
		alert('Succesfully Login .');
		// navigate('/about');
    } else {
      alert('Please Login again.');
    }
  };
 
    return (
	 <div className=" w-100 bgi3 pt-5 pb-5" style={{ height: '665px'}}>
		<div className="wrapper  ">
			<form className="container mt-5 form-signin" method="POST"  onSubmit={compareCredentials}>
				<h1 className="form-signin-heading">Login</h1>
				<div className="row mb-3">
					<div className="col">
						<input className="form-control"type="email" name="email" value={email}	onChange={handleInputChange} placeholder="Email"/>
					</div>
				</div>
				<div className="row mb-3">
					<div className="col">
						<input type="password" className="form-control"	name="password"value={password}	onChange={handleInputChange} placeholder="Password"/>
					</div>
				</div>
				<button type="submit" className="btn button">Login</button>
				<p className="mt-3">OR</p>
				<Link className="text-decoration-none button text-center  btn" 	 href="/Signup" >Signup</Link>
			</form>
		</div>
      </div>
	  

    );
  }

  export default App;