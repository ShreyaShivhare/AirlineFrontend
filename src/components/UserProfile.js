import React, { Component } from "react";
import AuthenticationService from "../service/AuthenticationService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class UserProfile extends Component {
    constructor(props) {
        super(props)

        this.state = { user: [] };
        // this.flightDetails=this.flightDetails.bind(this);
        this.edituser = this.edituser.bind(this);
    }

    componentDidMount() {
        AuthenticationService.getUserById().then((response) => {
            this.setState({ user: response.data });
        });
    }

    edituser(id) {
        this.props.history.push(`/addAdmin/${id}`);
    }

    render() {
        return (
            <div class="card6" data-tilt>
                <img src='images/avatar.jpg'></img>
                <h2>User Profile:</h2>

                <div className="row">
                    <label> User Name : </label>
                    <div> {this.state.user.name}</div>
                </div>

                <div className="row">
                    <label> Email ID : </label>
                    <div> {this.state.user.emailAddress}</div>

                </div>
                <div className="row">
                    <label> Phone No : </label>
                    <div> {this.state.user.ContactNumber}</div>

                </div>

                <div className="row">
                    <label> Gender : </label>
                    <div> {this.state.user.gender}</div>

                </div>

                <button className="btn btn-success" onClick={() => this.editAdmin(this.state.user.id)}>
                    <span>
                        <FontAwesomeIcon icon="edit"></FontAwesomeIcon>
                    </span>
                </button>
            </div>
        );
    }
}
