import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './App1.css';
const Homie = () => {
	const [features, setFeature] = useState([]);

	useEffect(() => {
		loadFeatures();
	}, []);

	const loadFeatures = async () => {

		const result = await axios.get("http://localhost:3004/feature_1");
		console.log(result);
		setFeature(result.data.reverse());
		
		
	};

	const deleteUser = async id => {
		await axios.delete(`http://localhost:3004/feature_1/${id}`);
		loadFeatures();
	};

	return (
		<div className="container">
		<div className="py-4">
		<h1>Feature List Page </h1>
		<div className="b"><Link className ="btn btn-primary btn-lg" to={`/about`}>Add A Rule</Link></div> 
		<br></br>
		<table className="table table-striped  text border shadow">
		<thead className ="thead-dark">
		<tr>
		<th scope="col" >#</th>
		<th scope="col" >Custom Key</th>
		<th scope="col" >Custom Value</th>

		<th scope="col">True or False</th>
		
		<th scope="col">Action</th>
		
		</tr>
		</thead>
		<tbody>
		{features.map((feature, index) => (
			
			
			<tr>
			<th scope="row">{index + 1}</th>
			<td>{feature.customkey1}</td>

			<td>{feature.customval1}</td>
			<td>{feature.fval1}</td>
			
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