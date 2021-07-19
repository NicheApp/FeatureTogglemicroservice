import React, {Component} from 'react';
class MyForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class = "container" >
          <div class="mb-3">
            <br></br>
            <label for="formGroupExampleInput" class="form-label">Feature Name</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="input placeholder"></input>
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">Custom key</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="input Null for no key"></input>
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput3" class="form-label">Custom value</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="input Null for no value"></input>
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput4" class="form-label">Boolean value</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="True/false"></input>
          </div>
          
          
          <button class="btn btn-primary" type="submit">Button</button>
        </div>
      </form>
    );
  }
}
export default MyForm;