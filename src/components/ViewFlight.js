import React,{Component} from "react";

import AdminService from "../service/AdminService";

export default class ViewFlight extends Component{

    constructor(props) {
        super(props)
 
        this.state = {
            flightId: this.props.match.params.flightId,
            // id: this.props.match.params.id,
            flight: {}
        }
    }

    componentDidMount(){
        console.log("Hello"+this.setState.flightId);
        AdminService.getFlightById(this.state.flightId).then( res => {
            this.setState({flight: res.data});
            console.log(JSON.stringify(this.state.flight));

        })
        .catch(error => {console.log("Hello"+error.res)});
    }

    render(){
        return(
            <div class="card4">
                <br></br>
                  <div class="contentBx"  >
                    <div class="card" style={{height:'60px'}}>
                        <h3 className = "text-center"> View Flight Details</h3>
                            {/* <label>  </label> */}
                            <div>Flight Number: { this.state.flight.flightNumber }</div>
                        </div>
                        <div className = "row">
                            {/* <label>  </label> */}
                            <div>Departure Airport: { this.state.flight.departureAirport }</div>
                        </div>
                        <div className = "row">
                            {/* <label>  </label> */}
                            <div>Arrival Airport: { this.state.flight.destinationAirport }</div>
                        </div>
                        <div className = "row">
                            {/* <label>  </label> */}
                            <div>Flight Charge: { this.state.flight.flightCharge }</div>
                        </div>
                    </div>
                </div>
        );
    }
}