import React from "react";
import {NavLink, Link} from "react-router-dom";
const Navbar = () => {

	return(

		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">

			
			<div className="container-fluid">
			    <a className="navbar-brand" href="#"><i class="fab fa-accusoft"></i>Feature Toggle</a>
			    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
			    <div className="collapse navbar-collapse" id="navbarSupportedContent">
			      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
			        <li className="nav-item">
			        	<NavLink className="nav-link" exact to="/">Features</NavLink>
			        </li>
			        
			        
			        <li className="nav-item">
			          <NavLink className="nav-link" exact to="/project">projects</NavLink>
			        </li>
			      </ul>
			      
			    </div>
			</div>
			</nav>

	)
}

export default Navbar;