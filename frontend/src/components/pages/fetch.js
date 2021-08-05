import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import '@trendmicro/react-toggle-switch/dist/react-toggle-switch.css';

import Switch from "react-switch";
import Toggle from 'react-toggle'
import './App1.css';
const Homie = () => {


	const [features, setFeature] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		
		getData();
	}, []);


	const getData = async () => {
	  const response = await fetch("http://localhost:8080/toggle/getfeatures", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", 
      "Access-Control-Allow-Origin": "*",
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      //body: JSON.stringify(response) // body data type must match "Content-Type" header
    });
	  let body = await response.json();
	  console.log(body);
	  setFeature(body);
	  console.log(setFeature);
	};

	

	const deleteUser = async id => {
		await axios.delete(`http://localhost:3003/features/${id}`);
//		loadFeatures();
		getData();
	};
	
	return (
		
		<div className="container">
		<div className="py-4">

		<h1>Feature List Page </h1>
		<div className="b"><Link className ="btn btn-primary btn-lg" to={`/fonly`}>Add Feature</Link></div> 
		
		<br></br>
		<table className="table table-striped  text border shadow">
		<thead className ="thead-dark">
		<tr>
		<th scope="col" >#</th>
		<th scope="col" >Feature Name</th>
		
		<th scope="col"> Enabled</th>
		<th scope="col"></th>
		
		<th scope="col">Action</th>
		<th scope="col"></th>
		</tr>
		</thead>
		<tbody>
		{features && features.map((feature, index) => (
			
			
			<tr>
			<th scope="row">{index + 1}</th>
			<td>{feature.feature_name}</td>
			
			<td>

				
				{feature.active.toString()}</td>
		
			<td><Link class="btn btn-primary" 
			to={{
    pathname: "/f1only/"+feature.feature_name +"+"+feature.project,
    state: {"featureName" :feature.feature_name} // your data array of objects
  }}   >View</Link></td>
			<td><Link class="btn btn-warning" to={`/edituser/${feature.id}`}>Edit Rule</Link></td>
			<td><Link class="btn btn-danger" onClick={() => deleteUser(feature.id)}>Delete</Link></td>
			
			</tr>
			
			))}
			</tbody>
			</table>
			</div>
			</div>
			);
		};

		export default Homie;