
import React, { Component } from 'react'

import UserService from "../service/UserService";

export default class FlightDetails extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            flight: {}
        }
    }
    componentDidMount() {
        UserService.getUserById(this.state.id).then(res => {
            this.setState({ flight: res.data });
        })
    }
    //

    render() {
        return (
            <div>
                <div className='card4'>
                    <h2>Find Flight:</h2>

                    <div className="row">
                        <label> Flight Id: </label>
                        <div> {this.state.flight.id}</div>
                    </div>

                    <div className="row">
                        <label> From: </label>
                        <div> {this.state.flight.from}</div>
                    </div>
                    <div className="row">
                        <label> To: </label>
                        <div> {this.state.flight.to}</div>
                    </div>
                </div>
            </div>
        );
    }
}