import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserService from "../service/UserService";

export default class TicketDetails extends Component {
    constructor(props) {
        super(props)

        this.state = { ticket: [] };
        // this.flightDetails=this.flightDetails.bind(this);
    }

    componentDidMount() {
        UserService.getUserById().then((response) => {
            this.setState({ ticket: response.data });
        });
    }

    render() {
        return (
            <div>

                <div className="tablcards">
                    <div className='card5'>
                        <h2>Flight Details:</h2>

                        <div className="row">
                            <label> Flight Id: </label>
                            <div> {this.state.ticket.id}</div>
                        </div>

                        <div className="row">
                            <label> From: </label>
                            <div> {this.state.ticket.from}</div>

                        </div>
                        <div className="row">
                            <label> To: </label>
                            <div> {this.state.ticket.to}</div>

                        </div>

                    </div>


                    <div className='card5'>
                        <h2>Payment Details:</h2>

                        <div className="row">
                            <label> Total Amount: </label>
                            <div> {this.state.ticket.total_amount}</div>
                        </div>

                        <div className="row">
                            <label> Card Holder Name: </label>
                            <div> {this.state.ticket.id}</div>
                        </div>

                        <div className="row">
                            <label> Card Number:  </label>
                            <div> {this.state.ticket.id}</div>
                        </div>

                        <div className="row">
                            <label> Payment Status: </label>
                            <div> {this.state.ticket.id}</div>

                        </div>

                    </div>
                </div>


                <div>
                    <h1 className="text-center">Passenger Details</h1>
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <td> Booking Id</td>
                                <td> Flight Number</td>
                                <td> Email Id</td>
                                <td> Contact Number</td>
                                <td> Passenger Age</td>
                                <td> Total Amount</td>
                                <td> Passport Number</td>
                                <td> Number of Seats</td>
                                <td> Price </td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.ticket.map(
                                    t =>
                                        <tr key={t.bookingId}>
                                            <td> {t.bookingId} </td>
                                            <td> {t.flightNumber} </td>
                                            <td> {t.emailAddress} </td>
                                            <td> {t.ContactNumber} </td>
                                            <td> {t.passengerAge} </td>
                                            <td> {t.total_amount} </td>
                                            <td> {t.passportNumber} </td>
                                            <td> {t.numberOfSeats} </td>
                                            <td> {t.price} </td>
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