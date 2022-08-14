import React, { Component } from "react";

import AuthenticationService from "../service/AuthenticationService";

const required = (value) => {
    if (!value) {
        return (
            <div className="invalid-feedback d-block">
                This field is required!
            </div>
        );
    }
};
export default class AdLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.checkLogin = this.checkLogin.bind(this);
    }
    handleChange(event) {
        this.setState(
            {
                [event.target.name]

                    : event.target.value
            }
        )
    }

    checkLogin(p) {
        p.preventDefault();
        let adm = { admin_email: this.state.admin_email, admin_pass: this.state.admin_pass };
        console.log(JSON.stringify(adm));
        AuthenticationService.adminLogin(adm).then(response => {
            console.log(response);
            if (response.data) {
                this.setState({ showSuccessMessage: true })
                this.setState({ hasLoginFailed: false })
                this.props.history.push('/flights')
                alert("Admin Login Success!")
            }
            else {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true }) 
            }
        }).catch(() => {
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
        });
    }
    render() {
        return (
            <div>
                <div class="contentBx"  >
                    <div class="card" >
                        <h1>Admin Login</h1>
                        <form>
                            {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                            {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                            <div className="form-group">
                                <label>User Name:</label>
                                <input type="text" name="admin_email" className="form-control" value={this.state.admin_email}
                                    onChange={this.handleChange} validations={[required]} />
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type="password" name="admin_pass" className="form-control" value={this.state.admin_pass}
                                    onChange={this.handleChange} validations={[required]} />
                            </div>
                            <div class="inputBx">
                                <button className="btn btn-success" onClick={this.checkLogin} style={{ fontSize: '20px' }} >Login</button>
                            </div>
                            <div >
                                <p style={{ fontSize: '20px', fontFamily: '//#region ' }}>Don't have an account?<a href="/register_user" style={{ color: 'black', fontStyle: 'normal', fontSize: '22px' }}>Sign up</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

// import React, { Component } from "react";

// import AuthenticationService from "../service/AuthenticationService";


// const required = (value) => {
//     if (!value) {
//         return (
//             <div className="invalid-feedback d-block">
//                 This field is required!
//             </div>
//         );
//     }
// };

// export default class Login extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             email: '',
//             password: '',
//             hasLoginFailed: false,
//             showSuccessMessage: false
//         }

//         this.handleChange = this.handleChange.bind(this);
//         this.checkLogin = this.checkLogin.bind(this);
//     }

//     handleChange(event) {
//         this.setState(
//             {
//                 [event.target.name]
//                     : event.target.value
//             }
//         )
//     }

//     checkLogin(p) {
//         p.preventDefault();
//         let dealer = { email: this.state.email, password: this.state.password };
//         console.log(JSON.stringify(dealer));

//         AuthenticationService.loginDealer(dealer).then(response => {
//             console.log(response);
//             if (response.data) {
//                 this.setState({ showSuccessMessage: true })
//                 this.setState({ hasLoginFailed: false })
//                 this.props.history.push('/products')
//             }
//             else {

//                 this.setState({ showSuccessMessage: false })
//                 this.setState({ hasLoginFailed: true })

//             }
//         }).catch(() => {
//             this.setState({ showSuccessMessage: false })
//             this.setState({ hasLoginFailed: true })

//         });
//     }

//     render() {
//         return (
//             <div>


//                 <div class="contentBx"  >
//                     <div class="card" >
//                         <h1>Admin Login</h1>
//                         <h6>Please enter Email & Password !!</h6>
//                         <form>
//                             {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
//                             {this.state.showSuccessMessage && <div>Login Sucessful</div>}
//                             <div className="form-group">
//                                 <label>User Name:</label>
//                                 <input type="text" name="email" className="form-control" value={this.state.email}
//                                     onChange={this.handleChange} validations={[required]} />
//                             </div>
//                             <div className="form-group">
//                                 <label>Password:</label>
//                                 <input type="password" name="password" className="form-control" value={this.state.password}
//                                     onChange={this.handleChange} validations={[required]} />
//                             </div>
//                             <div class="inputBx">
//                                 <button className="btn btn-success" style={{ fontSize: '20px' }} >Login</button>
//                             </div>

//                             <div >
//                                 <p style={{ fontSize: '20px', fontFamily: '//#region ' }}>Don't have an account?<a href="/register_user" style={{ color: 'black', fontStyle: 'normal', fontSize: '22px' }}>Sign up</a>
//                                 </p>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }