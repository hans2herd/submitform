import React, { Component } from 'react';

class Form extends Component {
  state = {
    'name': '',
    'address': '',
    'phone': ''
  }

  handleSubmit= e => {
      e.preventDefault()
      const data = JSON.stringify({ ...this.state})
      fetch('http://localhost:4000', {
          method: 'POST',
          body: data,
          headers: {
              'Content-Type': 'application/json'
          }
      })
  }

  render() {
    return (
      <div className="App">
      <form onSubmit={this.handleSubmit}>
  {/* <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div> */}
  <div class="form-group">
    <label for="exampleInputPassword1">Name</label>
    <input type="text" class="form-control" id="exampleInputName" placeholder="Enter Name"
    onChange={e => this.setState({ name: e.target.value })}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Address</label>
    <input type="text" class="form-control" id="exampleInputAddress" placeholder="Enter Address"
    onChange={e => this.setState({ address: e.target.value })}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Number</label>
    <input type="text" class="form-control" id="exampleInputPhoneNumber" placeholder="Phone Number"
    onChange={e => this.setState({ number: e.target.value })}/>
  </div>
  {/* <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        
      </div>
    );
  }
}

export default Form;
