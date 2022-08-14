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
            flightName:'',
            departureAirport: '' , 
            destinationAirport:'' ,
            departureDate: '' ,
            arrivalDate: '' , 
            departureTime:'' ,
            arrivalTime:'' ,
            duration:'', //added duration
            cabin: '',
            economy:'', //added
            bussiness:'',//added
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
        
        if(this.state.flightId === '_add'){
            return
        }
        else{
            AdminService.getFlightById(this.state.flightId).then( (response) =>{
                let flight = response.data;
                this.setState({flightNumber: flight.flightNumber,
                    flightName:flight.flightName, //added
                    departureAirport: flight.departureAirport,
                    destinationAirport : flight.destinationAirport,
                    departureDate : flight.departureDate,
                    arrivalDate : flight.arrivalDate,
                    departureTime : flight.departureTime,
                    arrivalTime : flight.arrivalTime,
                    duration: flight.duration, //added
                    cabin:flight.cabin,
                    economy: flight.economy, //added
                    bussiness: flight.bussiness, //added
                    flightCharge:flight.flightCharge
                    
                });
            });
        }        
    }

    saveOrUpdateFlight = (f) => {
        f.preventDefault();
        let flight = {flightNumber: this.state.flightNumber, flightName:this.state.flightName, departureAirport: this.state.departureAirport,destinationAirport:this.state.destinationAirport,
            departureDate:this.state.departureDate, arrivalDate:this.state.arrivalDate, departureTime:this.state.departureTime,
        arrivalTime:this.state.arrivalTime,duration:this.state.duration,cabin:this.state.cabin,economy:this.state.economy,bussiness: this.state.bussiness, flightCharge:this.state.flightCharge};
        console.log('flight => ' + JSON.stringify(flight));
        
        if(this.state.flightId === '_add'){
            AdminService.createFlight(flight).then(response =>{
                alert("hello")
                console.log(response.data)
                
                this.props.history.push('/flights');
            });
        }
        else{
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
    //added
    changeflightNameHandler= (event) => {
        this.setState({flightName: event.target.value});
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
    //added
    changedurationHandler= (event) => {
        this.setState({duration: event.target.value});
    }
    changecabinHandler= (event) => {
        this.setState({cabin: event.target.value});
    }
    //added
    changeEconomyHandler= (event) => {
        this.setState({economy: event.target.value});
    }
    //added
    changeBussinessHandler= (event) => {
        this.setState({bussiness: event.target.value});
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
    render() {
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

                                        {/* added */}
                                        <div  className = "form-group">
                                            <label> Flight Name: </label>
                                            <input placeholder="Flight Name" name="flightName" className="form-control" 
                                                value={this.state.flightName} onChange={this.changeflightNameHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> From: </label>
                                            <input placeholder=" departureAirport" name="departureAirport" className="form-control" 
                                                value={this.state.departureAirport} onChange={this.changeFromHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> To: </label>
                                            <input placeholder="Destination Airport" name="destinationAirport" className="form-control" 
                                                value={this.state.destinationAirport} onChange={this.changetoHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Departure Date: </label>
                                            <input type="date" placeholder="Departure Date" name="departureDate" className="form-control" 
                                                value={this.state.departureDate} onChange={this.changedepartureDateHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Arrival Date: </label>
                                            <input type="date" placeholder="Arrival Date" name="arrivalDate" className="form-control" 
                                                value={this.state.arrivalDate} onChange={this.changearrivalDateHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Departure Time: </label>
                                            <input placeholder="Departure Time" name="departureTime" className="form-control" 
                                                value={this.state.departureTime} onChange={this.changedepartureTimeHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Arrival Time: </label>
                                            <input placeholder="Arrival Time" name="arrivalTime" className="form-control" 
                                                value={this.state.arrivalTime} onChange={this.changearrivalTimeHandler}/>
                                        </div>

                                        {/* added */}
                                        <div className = "form-group">
                                            <label> Duration: </label>
                                            <input placeholder="Flight Duration" name="duration" className="form-control" 
                                                value={this.state.duration} onChange={this.changedurationHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Cabin: </label>
                                            <input placeholder="cabin" name="cabin" className="form-control" 
                                                value={this.state.cabin} onChange={this.changecabinHandler}/>
                                        </div>
                                        
                                        {/* added */}
                                        <div className = "form-group">
                                            <label> Economy Class Seats: </label>
                                            <input placeholder="Economy Class" name="economy" className="form-control" 
                                                value={this.state.economy} onChange={this.changeEconomyHandler}/>
                                        </div>

                                        {/* added bussiness class*/}
                                        <div className = "form-group">
                                            <label> Bussiness Class Seats: </label>
                                            <input placeholder="Bussiness Class" name="bussiness" className="form-control" 
                                                value={this.state.bussiness} onChange={this.changeBussinessHandler}/>
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