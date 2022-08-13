import React, { Component } from "react";

const required = (value) => {
  if (!value) {
    return (
      <div className="invalid-feedback d-block">
        This field is required!
      </div>
    );
  }
}; 

export default class Home extends Component {
  constructor(props) {
      super(props)

      this.state = {
          departureAirport: '',
          arrivalAirport: '',
          departureDate: ''
      }

      // this.handleChange = this.handleChange.bind(this);
      // this.checkLogin = this.checkLogin.bind(this);
  }



render(){
  return (
    <div class="card2" data-tilt>
      <img src='images/img.jpg'></img>
            <h2>Find Flight:</h2>
            <form>
            <div className = "form-group">
                        <label>From:</label>  
                        <input type="text" name="departureAirport" className="form-control" value={this.state.departureAirport} 
                        onChange={this.handleChange} validations={[required]} />
                    </div>

                    <div className = "form-group">
                        <label>To:</label>  
                        <input type="text" name="arrivalAirport" className="form-control" value={this.state.arrivalAirport} 
                        onChange={this.handleChange} validations={[required]} />
                    </div>

                    <div className = "form-group">
                        <label>Departure Date:</label>  
                        <input type="Date" name="departureDate" className="form-control" value={this.state.departureDate} 
                        onChange={this.handleChange} validations={[required]} />
                    </div>
                    <button className="btn btn-success" onClick={this.checkLogin}>Search</button>
            </form>
        </div>
  );
}
}

      {/* <b style={{ fontSize: '24px', fontFamily: 'monospace', fontStyle: "inherit", color:'grey' }}>From:</b><input type="text" name="departureAirport" />
      <b style={{ fontSize: '24px', fontFamily: 'monospace', fontStyle: "inherit", color:'grey' }}>To:</b><input type="text" name="arrivalAirport" />
      <b style={{ fontSize: '24px', fontFamily: 'monospace', fontStyle: "inherit", color:'grey' }}>DepartureDate:</b><input type="text" name="departureDate"/>
   <button className='btn1'>Search</button> */}
      

{/* <b>From:</b><input type="text" name="from" onChange={(event)=>{this.from=event.target.value}}/>
<b>To:</b><input type="text" name="to" onChange={(event)=>{this.to=event.target.value}}/>
<b>DepartureDate:</b><input type="text" name="departureDate" onChange={(event)=>{this.departureDate=event.target.value}}/>
<button onClick={this.handleSubmit.bind(this)}>Search</button> */}