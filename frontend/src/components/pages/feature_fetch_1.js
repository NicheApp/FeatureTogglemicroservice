import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './App1.css';
import { makeStyles } from '@material-ui/core/styles';
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
function shoot(key,value){
	alert("Your Function was created  "+ key+"-"+value);
   //window.location.reload(false);
  }
  const useStyles = makeStyles((theme) => ({
	root: {
	  '& > *': {
		margin: theme.spacing(1),
		width: '25ch',
	  },
	},
  }));
const Homie = () => {
	const [features, setFeature] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [open, setOpen] = React.useState(false);
	const pathname = window.location.pathname;

	const abc = pathname.substring(pathname.lastIndexOf('/') + 1);
	const arr= abc.split('+');
	const lastItem=arr[0];
	const projectname= arr[1];
	
	              


	const [feature1, setFeature1] = useState({
		custom_label: "",
		custom_label_value: "",
		enabled: ""
		  
	  });

	  const {custom_label, custom_label_value, enabled} = feature1;
	  const [myValue, setValue] = useState('') 
	  const classes = useStyles();
	//alert(lastItem);
	useEffect(() => {
		
		getData1();
		}, []);

		const handleClickOpen = (custom_label,custom_label_value,enabled) => {
			feature1.custom_label=custom_label;
			feature1.custom_label_value=custom_label_value;
			feature1.enabled=enabled;
			setOpen(true);
		  };

		 

		  
		  const handleClose = () => {
			setOpen(false);
			
		};
	
	const getData1 = async () => {
	  //const response = await fetch("http://localhost:8080/toggle/getfeatures");
	  //const jsonData = await response.json();
	  //console.log(response.json());
	  //setFeature(jsonData.data);
	  const url = "http://localhost:8080/toggle/getfeaturesbyname/"+lastItem;
	  //alert(url);
	  const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", 
      // include, *same-origin, omit
      
      headers: {
      	"Access-Control-Allow-Origin": "*",
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
		const response = await fetch("http://localhost:8080/toggle/updaterule", {
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
		shoot("data updated succesfully" );
	   //console.log(body.id);
		//setMessage(body.id ? "Data sucessfully updated" : "Data updation failed");
	  }


	const deleteUser = async id => {
		await axios.delete(`http://localhost:3004/feature_1/${id}`);
		//loadFeatures();
		getData1();
	};

	const handleSubmit = variables => {
		
		handleClose();
		var featureName=lastItem;
		var key=custom_label;
		var value= custom_label_value;
		var active= myValue;
		var project = projectname;
	
		const toInput = {featureName, key,value,active,project};
		shoot("- "+featureName+"-"+myValue+"-"+key+"-"+value);
		sampleFunc(toInput);

		
	  };


	return (
		<div className="container">
		<div className="py-4">
		<Dialog open={open} onClose={handleClose}>
        <DialogTitle>
		--------    Update Rule    --------        
        </DialogTitle>
        
		<TextField
            autoFocus
            margin="dense"
            id="key"
            label={custom_label}
            type="email"
			
            fullWidth
          />
		  <TextField
            autoFocus
            margin="dense"
            id="value"
            label={custom_label_value}
			
            type="email"
            fullWidth
          />
		  <TextField
            autoFocus
            margin="dense"
            id="active"
            label= {enabled+""}
            type="email"
			onChange={(e) => setValue(e.target.value)}  
            fullWidth
			
          />
		  
		  
		
        <DialogActions>
          <Button onClick={handleClose} color="primary">
           Close
          </Button>
          <Button onClick={handleSubmit} color="primary" autoFocus>
          Update
          </Button>
        </DialogActions>
      </Dialog>
		<h1>Rules for : {lastItem} </h1>
		
		<div className="b"><Link className ="btn btn-primary btn-lg"  to={`/about/`+lastItem}>Add Rule</Link></div> 
		<br></br>
		<table className="table table-striped  text border shadow">
		<thead className ="thead-dark">
		<tr>
		<th scope="col" >#</th>
		<th scope="col" >Custom Key</th>
		<th scope="col" >Custom Value</th>

		<th scope="col">Enabled</th>
		
		<th scope="col">Action</th>
		
		</tr>
		</thead>
		<tbody>
		
		{features && features.map((feature, index) => (
			
			
			<tr>
			<th scope="row">{index + 1}</th>
			<td>{feature.custom_label}</td>

			<td>{feature.custom_label_value}</td>
			<td>
				
				{feature.active.toString()}</td>
			<td><Link class="btn btn-warning" onClick={() => handleClickOpen(feature.custom_label,feature.custom_label_value,feature.active)} >Edit Rule</Link></td>
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