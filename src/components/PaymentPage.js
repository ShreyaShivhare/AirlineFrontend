import React, { Component } from 'react'
import '../style/payment.css'
import AuthenticationService from '../service/AuthenticationService'



export default class PaymentPage extends Component {
    constructor(props) {
        super(props)
 
        this.state = {
            value:'show',
            
        
            fields: {},
            errors: {}
          }

          
   
          this.handleChange = this.handleChange.bind(this);
          this.paymentDealer = this.paymentDealer.bind(this);  
         
    }
    
    
    
    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
 
      }
   
   
    paymentDealer = (d) => {
       
        d.preventDefault();
       if (this.validateForm()) {
            let fields = {};
            fields["creditCardNumber"] = "";
            fields["CVV_code"] = "";
            fields["userName"] = "";
            fields["phoneNumber"]="";
            fields["expirationDate"]="";
            fields["total_amount"]="";
            this.setState({fields:fields});
            alert("payment Successfull");
       
     d.preventDefault();
        let payment = {creditCardNumber: this.state.fields.creditCardNumber,CVV_code: this.state.fields.CVV_code,
          userName: this.state.fields.userName,phoneNumber: this.state.fields.phoneNumber,
          expirationDate: this.state.fields.expirationDate ,total_amount: this.state.fields.total_amount};
        console.log('payment => ' + JSON.stringify(payment));
 
        AuthenticationService.paymentDealer(payment).then(response =>{
            this.props.history.push('/pdetails');
        });
    }
}
validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

   if (!fields["creditCardNumber"]) {
      formIsValid = false;
      errors["creditCardNumber"] = "*Please enter your  card number.";
    }

    if (typeof fields["creditCardNumber"] !== "undefined") {
      if (!fields["creditCardNumber"].match(/^[0-9]{12}$/)) {
        formIsValid = false;
        errors["creditCardNumber"] = "*Please enter correct number only.";
      }
    }
    if (!fields["phoneNumber"]) {
        formIsValid = false;
        errors["phoneNumber"] = "*Please enter your  Phone  number.";
      }
  
      if (typeof fields["phoneNumber"] !== "undefined") {
        if (!fields["phoneNumber"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["phoneNumber"] = "*Please enter correct number only.";
        }
      }
   

    if (!fields["CVV_code"]) {
      formIsValid = false;
      errors["CVV_code"] = "*Please enter your CVV no.";
    }

    if (typeof fields["CVV_code"] !== "undefined") {
      if (!fields["CVV_code"].match(/^[0-9]{3}$/)) {
        formIsValid = false;
        errors["CVV_code"] = "*Please enter valid cvv no.";
      }
    }
    if (!fields["expirationDate"]) {
      formIsValid = false;
      errors["expirationDate"] = "*Please enter date.";
    }

    if (!fields["total_amount"]) {
      formIsValid = false;
      errors["total_amount"] = "*Please enter Amount.";
    }
    

    
    
    if (!fields["userName"]) {
        formIsValid = false;
        errors["userName"] = "*Please enter your name.";
      }
    
    this.setState({
      errors: errors
    });
    return formIsValid;

  }
  cancel(){
    this.props.history.push('/home');
  }

  divstatus = (e) =>{
    this.setState({value:e.target.value});
    

  }
render() {
    return (
        <div>
                <br></br>
                <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-7 offset-md-3 offset-md-3">
                               <h1 className="text-center">Payment</h1>
                                <div className = "card-body">
                                    <h1>Payment Option</h1>
                                    <select onChange={this.divstatus}>
                                    
                                        <option value="show">CREDIT CARD</option>
                                        {/* <option value="hide">CREDIT CARD</option> */}
                                        

                                    </select>

                                    <br>
                                    </br>
                                    <br>
                                    </br>
                                    <div className={this.state.value}>
                                        
                                    <label> Enter phone No. </label>
                                            <input placeholder="Enter phone no." name="phoneNumber" className="form-control"
                                                value={this.state.fields.phoneNumber} onChange={this.handleChange}/>
                                                <div className="errorMsg">{this.state.errors.phoneNumber}</div>
                                    
                                    </div>
                                    <form method="post"  name="userPaymentForm"  onSubmit= {this.paymentDealer}>
                                    <div className = "form-group">                              
                                            <label> Enter Card No. </label>
                                            <input placeholder="Enter Card no." name="creditCardNumber" className="form-control"
                                                value={this.state.fields.creditCardNumber} onChange={this.handleChange}/>
                                               <div className="errorMsg">{this.state.errors.creditCardNumber}</div>  
                                        </div>
                                       
                                        <div className = "form-group">
                                            <label> Enter CVV </label>
                                            <input placeholder="Enter CVV" name="CVV_code" className="form-control"
                                                value={this.state.fields.CVV_code} onChange={this.handleChange}/>
                                                 <div className="errorMsg">{this.state.errors.CVV_code}</div>
                                        </div>
                                        <div className = "form-group">
                                            <label> Enter Card Holder Name </label>
                                            <input type="text" placeholder="Enter Card Holder Name" name="userName" className="form-control"
                                                value={this.state.fields.userName} onChange={this.handleChange}/>
                                                 <div className="errorMsg">{this.state.errors.userName}</div>
                                        </div>

                                        <div className = "form-group">
                                            <label> Enter Expiration Date </label>
                                            <input type="date" placeholder=" Expiration Date" name="expirationDate" className="form-control"
                                                value={this.state.fields.expirationDate} onChange={this.handleChange} pattern="mm-yy"/>
                                                 <div className="errorMsg">{this.state.errors.expirationDate}</div>
                                        </div>

                                        <div className = "form-group">
                                            <label> Enter Amount </label>
                                            <input type="text" placeholder="Enter Amount" name="total_amount" className="form-control"
                                                value={this.state.fields.total_amount} onChange={this.handleChange}/>
                                                 <div className="errorMsg">{this.state.errors.total_amount}</div>
                                        </div>
                                        <input type="submit" className="btn btn-success"  value="pay"/>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>cancel</button>
                                                       </form>
                                </div>
                            </div>
                        </div>
 
                   </div>
            </div>
    );
  }
}


