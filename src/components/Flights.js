import React,{Component} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminService from "../service/AdminService";

export default class Flights extends Component{
    /*The constructor () is invoked before the component is mounted. In the constructor, we have declared our 
    state variables and bind the different methods so that they are accessible from the state inside of the render() method.
    */
    constructor(props){
        super(props)

        this.state={flight:[]};

        this.deleteFlight=this.deleteFlight.bind(this); 
        this.viewFlight=this.viewFlight.bind(this); //viewAdmin
        this.addFlight=this.addFlight.bind(this);
        this.editFlight=this.editFlight.bind(this);
    }
    componentDidMount(){
        AdminService.getFlights().then((response) => {
            this.setState({flight:response.data});
    });

}
deleteFlight(flightId){
    AdminService.deleteFlight(flightId).then((response) => {
        this.setState({flight:this.state.flight.filter(flight => flight.flightId !== flightId)});
});
}
viewFlight(flightId){
    this.props.history.push(`/viewFlight/${flightId}`); //removed id
}
addFlight(){
    this.props.history.push('/addFlight/_add');
}

editFlight(flightId){
    this.props.history.push(`/addFlight/${flightId}`);
}
    render(){
        return(
            <div>
                <h1 className = "text-center"><span style={{fontWeight:'bold',color:"greenyellow"}}> Flight Details </span></h1>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addFlight}> Add Flight</button>
                 </div>

                 <br></br>
                 <div className="row">
                <table className = "table table-striped  table-dark  ">
                    <thead>
                        <tr>
                        <td>Flight Id</td>
                            <td>Flight Number</td>
                            <td>From</td>
                            <td>To</td>
                            <td>Departure Date</td>
                            <td>Arrival Date</td>
                            <td>Departure Time</td>
                            <td>Arrival Time</td>
                            <td>Cabin</td>
                            <td>Flight Charge</td>
                            <td> Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.flight.map(
                                f =>
                                // can be changed to flightId
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
                                <button className="btn btn-success" onClick={() => this.editFlight(f.flightId)}>
                                    <span>
                                    <FontAwesomeIcon icon="edit"></FontAwesomeIcon>
                                    </span>
                                    </button>
                                    &nbsp;
                                    <button className="btn btn-danger" onClick={() => this.deleteFlight(f.flightId)}>
                                    <span>
                                    <FontAwesomeIcon icon="trash"></FontAwesomeIcon>
                                </span>
                            </button>
                            &nbsp;
                            <button className="btn btn-info" onClick={() => this.viewFlight(f.flightId)}>
                                    <span>
                                    <FontAwesomeIcon icon="list"></FontAwesomeIcon>
                                    </span>
                                    </button>
                                </td>
                            </tr>
                            )   
                            
                        }
                                            
                </tbody>
                </table>
                </div>
 
            </div>


        );
    }

}