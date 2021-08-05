import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import '@trendmicro/react-toggle-switch/dist/react-toggle-switch.css';
import { makeStyles } from '@material-ui/core/styles';
import Switch from "react-switch";
import Toggle from 'react-toggle'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import 'bootstrap';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import './App1.css';
const useStyles = makeStyles(theme => ({
    dialogPaper: {
       
        height : '400px'
    },
}));
const Homie = () => {


	const [features, setFeature] = useState([]);
	const [open, setOpen] = React.useState(false);

	useEffect(() => {
		//loadFeatures();
		getData();
	}, []);


const [project,setproject] =useState("");

const handleClickOpen = () => {

	setOpen(true);
  };

 
  const handleClose = () => {
	setOpen(false);
	
};


	const getData = async () => {
	  const response = await fetch("http://localhost:8080/toggle/getprojects", {
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

	
	async function sampleFunc(toInput) {
		const response = await fetch("http://localhost:8080/toggle/createproject", {
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
		
	  }

	  const handleSubmit = variables => {
		handleClose();
		var projectname=project;
		 const toInput = {projectname};
	  
		sampleFunc(toInput);
		alert("i am project : "+ project);
		
	   
	  };
	
	return (
		
		<div className="container">
		<div className="py-4">
		<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle>
	Create New Project      
        </DialogTitle>
        
		
		  <TextField
            autoFocus
            margin="dense"
            id="active"
            label= "Projectname"
            type="email"
			onChange={(e) => setproject(e.target.value)}  
            fullWidth={true}
			
          />
		  
		  
		
        <DialogActions>
          <Button onClick={handleClose} color="primary">
           Close
          </Button>
          <Button onClick={handleSubmit} color="primary" autoFocus>
          Create
          </Button>
        </DialogActions>
      </Dialog>

		<div className="b"><Link className ="btn btn-primary btn-lg" onClick={() => handleClickOpen()}>Create New Project</Link></div> 
		
		<br></br>
		<table className="table table-striped  text border shadow">
		<thead className ="thead-dark">
		<tr>
		<th scope="col" >#</th>
		<th scope="col" >Project</th>
	
		
		<th scope="col">Action</th>
		<th scope="col"></th>
		</tr>
		</thead>
		<tbody>
		{features && features.map((feature, index) => (
			
			
			<tr>
			<th scope="row">{index + 1}</th>
			<td>{feature.project}</td>
		
			<td><Link class="btn btn-primary" 
			to={{
    pathname: "/f1only/"+feature.feature_name +"+"+feature.project,
    state: {"featureName" :feature.feature_name} // your data array of objects
  }}   >View</Link></td>
			
			
			</tr>
			
			))}
			</tbody>
			</table>
			</div>
			</div>
			);
		};

		export default Homie;