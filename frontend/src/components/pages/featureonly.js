import React, { useState } from "react";
import axios from 'axios'

import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import './App1.css';
function shoot(){
  alert("Your Function was created");
 //window.location.reload(false);
}
const Featureonly = () => {
  let history = useHistory();
  const [feature, setFeature] = useState({
    id: "",
    featureName: "",
    
    customkey: "",
    customval: "",  
    active: ""
    
   
  });
  const [message, setMessage] = React.useState("Nothing saved in the session");

  const { featureName, customkey, customval, active } = feature;
  
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

  const handleSubmit = variables => {
 
    const toInput = { featureName, active};
    sampleFunc(toInput);
    //setName("");
    //setDepartment("");
    //setGender("");
  };


  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Feature</h2>
        <form onSubmit={e => onSubmit(e)}>
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
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter True or False"
              name="active"
              value={active}
              onChange={e => onInputChange(e)}
            />
          </div>
          <br></br>
          <button className="btn btn-primary btn-block" onClick={handleSubmit}>Add Feature</button>
        </form>
        <Typography style={{ margin: 7 }} variant="body1">
          Status: {message}
        </Typography>
      </div>
    </div>
  );
};

export default Featureonly;