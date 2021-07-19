import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

import './App1.css';
function shoot(){
  alert("Your Function was created");
 //window.location.reload(false);
}

const Dumform = () => {
  let history = useHistory();
  const [feature1, setFeature1] = useState({
    id: "",
    featureName: "",
    key: "",
    value: "",  
    active: ""
    
   
  });

  const { featureName,key, value, active} = feature1;
  
  const onInputChange = e => {
    setFeature1({ ...feature1, [e.target.name]: e.target.value });

  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3004/feature_1", feature1);
    history.push("/f1only");
  };

 ////new code added
 async function sampleFunc(toInput) {
  const response = await fetch("http://localhost:8080/toggle/singlerule", {
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
 //console.log(body.id);
  //setMessage(body.id ? "Data sucessfully updated" : "Data updation failed");
}

const handleSubmit = variables => {
  //const[featureName]= this.props.location.state.featureName;
  const toInput = { featureName, key,value,active};
  sampleFunc(toInput);
  shoot();
  //setName("");
  //setDepartment("");
  //setGender("");
};



  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Rule</h2>
        <form onSubmit={e => onSubmit(e)}>
        <br></br>
    
    <div className="form-group" >
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter feature name"
        name="featureName"
        value={featureName}
        onChange={e => onInputChange(e)}
      />
    </div>

        
        <br></br>
    
          <div className="form-group" >
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Custom Key"
              name="key"
              value={key}
              onChange={e => onInputChange(e)}
            />
          </div>
          <br></br>
          <div className="form-group" >
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Custom Value"
              name="value"
              value={value}
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
      </div>
    </div>
  );
};

export default Dumform;