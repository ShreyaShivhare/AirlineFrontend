import React, { Component } from 'react'

import '../style/register.css'
import AuthenticationService from '../service/AuthenticationService'



export default class Registration extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fields: {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.registerUser = this.registerUser.bind(this);

    }

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });

    }

    registerUser = (d) => {

        d.preventDefault();

        if (this.validateForm()) {
            let fields = {};
            fields["title"] = "";
            fields["fname"] = "";
            fields["lname"] = "";
            fields["email"] = "";
            fields["pass"] = "";
            fields["cpass"] = "";
            fields["dob"] = "";
            fields["contactNo"] = "";

            this.setState({ fields: fields });

            alert("Registered Successfully");

            d.preventDefault();
            let user = {
                title: this.state.fields.title, fname: this.state.fields.fname, lname: this.state.fields.lname, email: this.state.fields.email, pass: this.state.fields.pass, cpass: this.state.fields.cpass, dob: this.state.fields.dob, contactNo: this.state.fields.contactNo,
            };
            // street: this.state.fields.street, city: this.state.fields.city, pincode: this.state.fields.pincode

            console.log('User => ' + JSON.stringify(user));

            AuthenticationService.registerUser(user).then(response => {
                this.props.history.push('/login_user');
            });

        }
    }

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["title"]) {
            formIsValid = false;
            errors["title"] = "*Please enter the title Mr/Mrs.";
        }
        if (!fields["fname"]) {
            formIsValid = false;
            errors["fname"] = "*Please enter your First Name.";
        }

        if (typeof fields["fname"] !== "undefined") {
            if (!fields["fname"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["fname"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["lname"]) {
            formIsValid = false;
            errors["lname"] = "*Please enter your Last Name.";
        }

        if (typeof fields["lname"] !== "undefined") {
            if (!fields["lname"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["lname"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "*Please enter your email-ID.";
        }

        if (typeof fields["email"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

            if (!pattern.test(fields["email"])) {
                formIsValid = false;
                errors["email"] = "*Please enter valid email-ID.";
            }
        }


        if (!fields["pass"]) {
            formIsValid = false;
            errors["pass"] = "*Please enter your password.";
        }

        if (typeof fields["pass"] !== "undefined") {
            if (!fields["pass"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)) {
                formIsValid = false;
                errors["pass"] = "*Please enter secure and strong password.";
            }
        }

        if (!fields["cpass"]) {
            formIsValid = false;
            errors["cpass"] = "*Please Confirm your password.";
        }

        if (typeof fields["cpass"] !== "undefined") {
            if (!fields["cpass"].match(fields["password"] && (/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/))) {
                formIsValid = false;
                errors["cpass"] = "*Please Enter Confirm passsword.";
            }
        }

        if (!fields["dob"]) {
            formIsValid = false;
            errors["dob"] = "*Please enter your DOB.";
        }

        if (!fields["contactNo"]) {
            formIsValid = false;
            errors["contactNo"] = "*Please enter your mobile no.";
        }

        if (typeof fields["contactNo"] !== "undefined") {
            if (!fields["contactNo"].match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["contactNo"] = "*Please enter valid mobile no.";
            }
        }

        // if (!fields["pincode"]) {
        //     formIsValid = false;
        //     errors["pincode"] = "*Please enter Pin Code";
        // }

        // if (typeof fields["pincode"] !== "undefined") {
        //     if (!fields["pincode"].match(/^[0-9]{6}$/)) {
        //         formIsValid = false;
        //         errors["phoneNo"] = "*Please enter valid Pin Code";
        //     }
        // }

        this.setState({
            errors: errors
        });
        return formIsValid;

    }

    cancel() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <br></br>
                <div class="contentBx">
                    <div class="card1">
                        <h1>Registration</h1>
                        <form method="post" name="userRegistrationForm" onSubmit={this.registerUser}>
                            <div className="form-group">
                                <label> Title: </label>
                                <input placeholder="Mr/Mrs" name="title" className="form-control"
                                    value={this.state.fields.title} onChange={this.handleChange} />
                                <div className="errorMsg">{this.state.errors.title}</div>
                            </div>


                            <div className="form-group">
                                <label> First Name: </label>
                                <input placeholder="First Name" name="fname" className="form-control"
                                    value={this.state.fields.fname} onChange={this.handleChange} />
                                <div className="errorMsg">{this.state.errors.fname}</div>
                            </div>
                            <div className="form-group">
                                <label> Last Name: </label>
                                <input placeholder="Last Name" name="lname" className="form-control"
                                    value={this.state.fields.lname} onChange={this.handleChange} />
                                <div className="errorMsg">{this.state.errors.lname}</div>
                            </div>
                            <div className="form-group">
                                <label> Email: </label>
                                <input placeholder="Email Id" name="email" className="form-control"
                                    value={this.state.fields.email} onChange={this.handleChange} />
                                <div className="errorMsg">{this.state.errors.email}</div>
                            </div>
                            <div className="form-group">
                                <label> Password: </label>
                                <input type="password" placeholder="Password" name="pass" className="form-control"
                                    value={this.state.fields.password} onChange={this.handleChange} />
                                <div className="errorMsg">{this.state.errors.pass}</div>
                            </div>
                            <div className="form-group">
                                <label> Confirm Password: </label>
                                <input type="password" placeholder="Confirm Password" name="cpass" className="form-control"
                                    value={this.state.fields.cpass} onChange={this.handleChange} />
                                <div className="errorMsg">{this.state.errors.cpass}</div>
                            </div>

                            <div className="form-group">
                                <label> Date of Birth: </label>
                                <input type="date" name="dob" className="form-control"
                                    value={this.state.fields.dob} onChange={this.handleChange} pattern="yyyy-mm-dd" />
                                <div className="errorMsg">{this.state.errors.dob}</div>
                            </div>

                            <div className="form-group">
                                <label> Phone : </label>
                                <input placeholder="Phone" name="contactNo" className="form-control"
                                    value={this.state.fields.contactNo} onChange={this.handleChange} />
                                <div className="errorMsg">{this.state.errors.contactNo}</div>
                            </div>
                            <br></br>
                            <br></br>

                            <input type="submit" className="btn btn-success" value="Register" />

                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}