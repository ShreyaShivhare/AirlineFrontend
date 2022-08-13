import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserService from "../service/UserService";

export default class TicketBooking extends Component {

    constructor(props) {
        super(props)

        this.state = { flight: [] };
        this.flightDetails = this.flightDetails.bind(this);
    }

    componentDidMount() {
        UserService.getUserById().then((response) => {

            this.setState({ flight: response.data });
        })
    }

    flightDetails(id) {
        this.props.history.push(`/fightDetails/${id}`);
    }

    render() {
        return (

            <div>

                <div>
                    <div className='card4'>
                        <h2>Flight Details:</h2>

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


                <div>
                    <h1 className="text-center">Booking Page</h1>
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <td>Booking ID</td>
                                <td>Flight Number</td>
                                <td>Departure Date</td>
                                <td>Booking Date</td>
                                <td>Email Id</td>
                                <td>Contact Number</td>
                                <td>Passenger Age</td>
                                <td>Total Amount</td>
                                <td>Passport Number</td>
                                <td>Number of Seats</td>
                                <td>Price</td>
                                <td> Flight Details</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.flight.map(
                                    book =>
                                        <tr key={book.bookingId}>
                                            <td> {book.bookingId} </td>
                                            <td> {book.flightNumber} </td>
                                            <td> {book.departureDate} </td>
                                            <td> {book.bookingDate} </td>
                                            <td> {book.emailAddress} </td>
                                            <td> {book.ContactNumber} </td>
                                            <td> {book.passengerAge} </td>
                                            <td> {book.total_amount} </td>
                                            <td> {book.passportNumber} </td>
                                            <td> {book.numberOfSeats} </td>
                                            <td> {book.price} </td>
                                            <td>  &nbsp;
                                                <button className="btn btn-info" onClick={() => this.flightDetails(book.bookingid)}>
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