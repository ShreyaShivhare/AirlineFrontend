import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import UserService from "../service/UserService";
import UserService from "../service/UserService";
import SearchService from "../service/SearchService";

const SIZES = ["xs", "sm", "lg", "2x", "3x", "5x", "7x", "10x"];

const required = (value) => {
  if (!value) {
    return (
      <div className="invalid-feedback d-block">
        This field is required!
      </div>
    );
  }
};

export default class User extends Component {
  constructor(props) {
    super(props)

    this.state = {
      departureAirport: '',
      arrivalAirport: '',
      departureDate: '',
      searchedFlight: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.searchFlight = this.searchFlight.bind(this);
  }

  handleChange(event) {
    this.setState(
      {
        [event.target.name]
          : event.target.value
      }
    )
  }

  searchFlight() {
    this.setState({ departureAirport: this.state.departureAirport })
    this.setState({ arrivalAirport: this.state.arrivalAirport })
    this.setState({ departureDate: this.state.departureDate })
    // f.preventDefault();
    this.displayFlight();
  }
  displayFlight() {
    // f.preventDefault();
    SearchService.searchFligthByParams(this.state.departureAirport, this.state.arrivalAirport,
      this.state.departureDate).then((response) => {
        // console.log(JSON.stringify(response));
        this.setState({
          searchedFlight: response.data
        });
        // f.preventDefault();//.catch(console.log);
      });
    alert("Alert Data");
    // f.preventDefault();
  }

  render() {
    return (

      <div>

        <h1 className="text-center"><span style={{ fontWeight: 'bold', color: "dark" }}> Search Flight

        </span></h1>

        <form className="Search">
          {/* <input type="text" placeholder="Flight name" name="search"></input> */}

          <div className="form-group">
            <label>From:</label>
            <input type="text" name="departureAirport" className="form-control" value={this.state.departureAirport}
              onChange={this.handleChange} validations={[required]} />
          </div>
          <div className="form-group">
            <label>To:</label>
            <input type="text" name="arrivalAirport" className="form-control" value={this.state.arrivalAirport}
              onChange={this.handleChange} validations={[required]} />
          </div>
          <div className="form-group">
            <label>Departure Date:</label>
            <input type="Date" name="departureDate" className="form-control" value={this.state.departureDate}
              onChange={this.handleChange} validations={[required]} />
          </div>
          <button className="btn btn-success" onClick={(e) => { e.preventDefault(); this.searchFlight()}}>Search</button>
        </form>
        <hr></hr>
        <br></br>
        <form>
          <div className="row">
            <table className="table table-striped  table-dark  ">
              <thead>
                <tr>
                  <td>Flight Id</td>
                  <td>Flight Number</td>
                  <td>Departure Airport</td>
                  <td>Arrival Airport</td>
                  <td>Departure Date</td>
                  <td>Arrival Date</td>
                  <td>Departure Time</td>
                  <td>Arrival Time</td>
                  <td>Cabin</td>
                  <td>Flight Charge</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.searchedFlight.map(
                    f =>
                      <tr key={f.flightId}>
                        <td> {f.flightId}</td>
                        <td> {f.flightNumber} </td>
                        <td> {f.departureAirport} </td>
                        <td> {f.destinationAirport} </td>
                        <td> {f.departureDate} </td>
                        <td> {f.arrivalDate} </td>
                        <td> {f.departureTime} </td>
                        <td> {f.arrivalTime} </td>
                        <td> {f.cabin} </td>
                        <td> {f.flightCharge} </td>
                        <td>
                          <button className="button" name="Book" type="button" onClick={() => this.viewUser(f.flightId)}>Book</button>
                        </td>
                      </tr>
                  )

                }
              </tbody>
            </table>
          </div>
        </form>
      </div>
    );
  }
}