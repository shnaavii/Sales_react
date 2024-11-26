"use client"
import React , { useState} from 'react';
import Link from 'next/link';
const Nav=(props) =>{
	// console.log(props);
	return(
		<>
			<nav className="navbar navbar-expand-lg nv">
				<div className="container-fluid">
					<a className="navbar-brand text-light" href="#">Beauty</a>
					<button className="navbar-toggler bg-danger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<Link className="nav-link text-decoration-none text-light  p-3 active" aria-current="page" href="http://localhost:3000">Home</Link>
						
						<Link className="nav-link text-decoration-none text-light  p-3" href="/Customer_requirementform">Customer forme</Link>
						<Link className="nav-link text-decoration-none text-light  p-3 " href="/Quotation_page" >Quotation</Link>
						<Link className="nav-link text-decoration-none text-light  p-3 " href="/History" >History</Link>
						
					</div>
					</div>
				</div>
			</nav>
		</>
	)
}
export default Nav