 "use client"
 import { useEffect, useState } from "react";
  import { createClient } from "@supabase/supabase-js";

  const supabase = createClient("https://ixtslbdqunbjjoxenemg.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4dHNsYmRxdW5iampveGVuZW1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI0NDgwNTgsImV4cCI6MjA0ODAyNDA1OH0.4Jtt02Uhuu55D0JLzXrK62ZVWMjWi8WDYm--hzM1-FI");

  function Signup() {
    const [countries, setCountries] = useState([]);
    const [email, setEmail] = useState([]);
    const [username, setUsername] = useState([]);
    const [pass, setPass] = useState([]);

    useEffect(() => {
      getCountries();
    }, []);

    async function getCountries() {
      const { data } = await supabase.from("users").select();
      setCountries(data);
	  console.log(data);
    
	}async function ins(e) {
		e.preventDefault();
      const { dd ,error} = await supabase.from("users").insert([{ email: email ,name: username ,password : pass}]);;
      // setCountries(dd);
	  console.log(dd);
	   if (error) {
      alert(error.message);
    } else {
      alert('Requirement submitted successfully!');
    }
    }

    return (
	 <div className=" w-100 bgi3 pt-5 pb-5" style={{ height: '665px'}}>
		<div className="log-form rounded">
			<form className="container mt-5">
				<h2 className="text-center mb-3">Signup</h2>
				<div className="row mb-3">
					<div className="col">
						<input type="text" className="form-control" placeholder="Customer Name" value={username} onChange={(e) => setUsername(e.target.value)}required/>
					</div>
				</div>
				<div className="row mb-3">
					<div className="col">
						<input type="email" className="form-control" placeholder=" Email" value={email} onChange={(e) => setEmail(e.target.value)}required/>
					</div>
				</div>
				<div className="row mb-3">
					<div className="col">
						<input type="password" className="form-control" placeholder=" Password" value={pass} onChange={(e) => setPass(e.target.value)}required/>
					</div>
				</div>
				<p className="text-center">
					<button className="btn btn-outline-info" onClick={ins}>send</button>
				</p>
			</form>
		</div>
	  </div>

    );
  }

  export default Signup;