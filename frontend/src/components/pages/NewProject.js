import React, { useState,useEffect } from "react";
import axios from 'axios'
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import 'bootstrap';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import { Link } from "react-router-dom";
import './App1.css';
function shoot(active){
  alert(active+"--"+"Your Function was created");

}
const Featureonly = () => {
  let history = useHistory();
  const [feature, setFeature] = useState({
    id: "",
    featureName: "",
    projectname: "",
    
    customkey: "",
    customval: "",  
    active: ""
    
   
  });


  const [projects, setproject] = useState([]);
setproject[0]="fdfd";
	useEffect(() => {
		
		getData();
	}, []);
 
  const [message, setMessage] = React.useState("Nothing saved in the session");

  const { featureName, customkey, customval, active,projectname } = feature;
  
  const onInputChange = e => {
    setFeature({ ...feature, [e.target.name]: e.target.value });

  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/features", feature);
    history.push("/");
  };
  ////new code added
  async function sampleFunc(toInput) {
    const response = await fetch("http://localhost:8080/toggle/create", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify(toInput) // body data type must match "Content-Type" header
    });
    let body = await response.json();
   console.log(body.id);
    setMessage(body.id ? "Data sucessfully updated" : "Data updation failed");
  }

//getting list of projects

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
  setproject(body);
  console.log(setFeature);
};



  const handleSubmit = variables => {
    var e = document.getElementById("ddlViewBy");
    var active = e.value;
     const toInput = { featureName, active,projectname};
  
    sampleFunc(toInput);
    history.push("/");
   
  };


  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
          
        <h2 className="text-center mb-4">Add Feature</h2>
        <form onSubmit={e => onSubmit(e)}>
        

          <br></br>
          <div className="form-group" >
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Feature Name"
              name="featureName"
              value={featureName}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          
          
          <br></br>
         
          <button className="btn btn-primary btn-block" onClick={handleSubmit}>Add Project</button>
        </form>
        <Typography style={{ margin: 7 }} variant="body1">
          Status: {message}
        </Typography>
      </div>
    </div>
  );
};

export default Featureonly;