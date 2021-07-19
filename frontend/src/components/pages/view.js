import React, {useEffect, useState } from "react";
import axios from 'axios'
import { useHistory, useParams}  from "react-router-dom";
import { Link } from 'react-router-dom';
//import './App.css';

const View = () => {
	const [feature, setFeature] = useState({
    id: "",
    name: "",
    customkey: "",
    customval: "",  
    fval: ""
   
  	});
  	const {id} = useParams();
  	useEffect(() => {
  		loadUser();
  	},[]);

  	const loadUser = async () => {
  	const result = await axios.get(`http://localhost:3003/features/${id}`);
  	setFeature(result.data);
  };
	return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">Feature Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Feature name: {feature.name}</li>
        <li className="list-group-item">Boolean Value: {feature.fval}</li>
        
      </ul>
      <br></br>
      <Link className ="btn btn-primary btn-sm" to={`/about/${feature.id}`}>Add A New Rule</Link>
      
    </div>
  );
	
};

export default View;