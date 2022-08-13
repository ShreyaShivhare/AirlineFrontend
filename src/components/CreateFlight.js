import { any, number } from "prop-types";
import React,{Component} from "react";

import AdminService from "../service/AdminService";
import UserService from "../service/UserService";

export default  class CreateFlight extends Component{

    constructor(props) {
        super(props)

        this.state = {
            
            flightId: this.props.match.params.flightId ,
            flightNumber: '' ,
            departureAirport: '' , //departure airport
            destinationAirport:'' , // //destination airport
            departureDate: '' , // departure Date
            arrivalDate: '' , // arrival Date
            departureTime:'' , // departureTime
            arrivalTime:'' , // arrivalTime
            cabin: '',
            flightCharge:''
        }
        this.saveOrUpdateFlight=this.saveOrUpdateFlight.bind(this);
        this.changeflightNumberHandler=this.changeflightNumberHandler.bind(this);
        this.changeFromHandler=this.changeFromHandler.bind(this);
        this.changetoHandler=this.changetoHandler.bind(this);
        this.changedepartureDateHandler=this.changedepartureDateHandler.bind(this);
        this.changearrivalDateHandler=this.changearrivalDateHandler .bind(this);
        this.changedepartureTimeHandler=this.changedepartureTimeHandler .bind(this);
        this.changearrivalTimeHandler=this.changearrivalTimeHandler .bind(this);
        this.changecabinHandler=this.changecabinHandler .bind(this);
        this.changeflightChargeHandler=this.changeflightChargeHandler .bind(this);
    }
    componentDidMount(){
        
        if(this.state.id === '_add'){
            return
        }
        else{
            AdminService.getFlightById(this.state.flightId).then( (response) =>{
                let flight = response.data;
                this.setState({flightNumber: flight.flightNumber,
                    departureAirport: flight.departureAirport,
                    destinationAirport : flight.destinationAirport,
                    departureDate : flight.departureDate,
                    arrivalDate : flight.arrivalDate,
                    departureTime : flight.departureTime,
                    arrivalTime : flight.arrivalTime,
                    cabin:flight.cabin,
                    flightCharge:flight.flightCharge
                    
                });
            });
        }        
    }

    saveOrUpdateFlight = (f) => {
        f.preventDefault();
        let flight = {flightNumber: this.state.flightNumber, departureAirport: this.state.departureAirport,destinationAirport:this.state.destinationAirport,
            departureDate:this.state.departureDate, arrivalDate:this.state.arrivalDate, departureTime:this.state.departureTime,
        arrivalTime:this.state.arrivalTime,cabin:this.state.cabin, flightCharge:this.state.flightCharge};
        console.log('flight => ' + JSON.stringify(flight));

        
        if(this.state.id === '_add'){
            AdminService.createFlight(flight).then(response =>{
                alert("hello")
                console.log(response.data)
                
                this.props.history.push('/flights');
            });
        }else{
            AdminService.updateFlight(flight, this.state.flightId).then( response => {
                console.log(response.data)
                this.props.history.push('/flights');
            });
        }
    }

    // changeNameHandler= (event) => {
    //     this.setState({name: event.target.value});
    // }

    changeflightNumberHandler= (event) => {
        this.setState({flightNumber: event.target.value});
    }

    changeFromHandler= (event) => {
        this.setState({departureAirport: event.target.value});
    }
    changetoHandler= (event) => {
        this.setState({destinationAirport: event.target.value});
    }

    changedepartureDateHandler= (event) => {
        this.setState({departureDate: event.target.value});// changed to departureDate
    }
    changearrivalDateHandler= (event) => {
        this.setState({arrivalDate: event.target.value}); // changed to arrivalDate
    }
    changedepartureTimeHandler= (event) => {
        this.setState({departureTime: event.target.value});
    }
    changearrivalTimeHandler= (event) => {
        this.setState({arrivalTime: event.target.value});
    }
    changecabinHandler= (event) => {
        this.setState({cabin: event.target.value});
    }
    changeflightChargeHandler= (event) => {
        this.setState({flightCharge: event.target.value});
    }

    cancel(){
        this.props.history.push('/flights');
    }


    getTitle(){
        if(this.state.id === '_add'){
            return <h1 className="text-center">Add Flight</h1>
        }else{
            return <h1 className="text-center">Update Flight</h1>
        }
    }
    render(){
        return(
            <div>
                <br></br>
                <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div  className = "card-body"  >
                                    <form>
                                        <div  className = "form-group">
                                            <label> Flight Number: </label>
                                            <input placeholder="Flight Number" name="flightNumber" className="form-control" 
                                                value={this.state.flightNumber} onChange={this.changeflightNumberHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> From: </label>
                                            <input placeholder=" departureAirport" name="departureAirport" className="form-control" 
                                                value={this.state.departureAirport} onChange={this.changeFromHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> To: </label>
                                            <input placeholder="destinationAirport" name="destinationAirport" className="form-control" 
                                                value={this.state.destinationAirport} onChange={this.changetoHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Departure Date: </label>
                                            <input placeholder="departureDate" name="departureDate" className="form-control" 
                                                value={this.state.departureDate} onChange={this.changedepartureDateHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Arrival Date: </label>
                                            <input placeholder="arrivalDate" name="arrivalDate" className="form-control" 
                                                value={this.state.arrivalDate} onChange={this.changearrivalDateHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Departure Time: </label>
                                            <input placeholder="departureTime" name="departureTime" className="form-control" 
                                                value={this.state.departureTime} onChange={this.changedepartureTimeHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Arrival Time: </label>
                                            <input placeholder="arrivalTime" name="arrivalTime" className="form-control" 
                                                value={this.state.arrivalTime} onChange={this.changearrivalTimeHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Cabin: </label>
                                            <input placeholder="cabin" name="cabin" className="form-control" 
                                                value={this.state.cabin} onChange={this.changecabinHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Flight Charge: </label>
                                            <input placeholder="flightCharge" name="flightCharge" className="form-control" 
                                                value={this.state.flightCharge} onChange={this.changeflightChargeHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateFlight}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

 
                
                   </div>

            </div>

        );
    }
 
}