import React, {useEffect, useState } from "react";
import axios from 'axios'
import { useHistory, useParams}  from "react-router-dom";


const Edituser = () => {
  let history = useHistory();
  const {id}  = useParams();
  const [feature, setFeature] = useState({
    featureName: "",
    
    customkey: "",
    customval: "",  
    active: ""
   
  });

  const { name, customkey, customval, fval } = feature;
  const onInputChange = e => {
    setFeature({ ...feature, [e.target.name]: e.target.value });
  };

  useEffect(() => {

  	loadUser();
  },[]);

  const onSubmit = async e => {
    e.preventDefault();
    //await axios.post(`http://localhost:3003/features/${id}`, feature);
    await axios.put(`http://localhost:3003/features/${id}`, feature);
    history.push("/");
  };

  const loadUser = async () => {
  	const result = await axios.get(`http://localhost:3003/features/${id}`);
  	setFeature(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Feature</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Feature Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <br></br>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Custom Key (Enter Null for no key)"
              name="customkey"
              value={customkey}
              onChange={e => onInputChange(e)}
            />
          </div>

          <br></br>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Custom Value"
              name="customval"
              value={customval}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <br></br>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter True or False"
              name="fval"
              value={fval}
              onChange={e => onInputChange(e)}
            />
          </div>
          <br></br>
          <button className="btn btn-success btn-block" >Update Feature</button>
        </form>
      </div>
    </div>
  );
};

export default Edituser;