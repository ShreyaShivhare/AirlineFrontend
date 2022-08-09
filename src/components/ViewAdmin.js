import React,{Component} from "react";

import AdminService from "../service/AdminService";

export default class ViewProduct extends Component{

    constructor(props) {
        super(props)
 
        this.state = {
            id: this.props.match.params.id,
            admin: {}
        }
    }

    componentDidMount(){
        AdminService.getAdminById(this.state.id).then( res => {
            this.setState({admin: res.data});
        })
    }

    render(){
        return(
            <div>
                <br></br>
                  <div class="contentBx"  >
                    <div class="card" style={{height:'60px'}}>
                        <h3 className = "text-center"> View Flight Details</h3>
                            <label> Flight Id: </label>
                            <div> { this.state.admin.id }</div>
                        </div>
                        <div className = "row">
                            <label> Flight Name </label>
                            <div> { this.state.admin.name }</div>
                        </div>
                        <div className = "row">
                            <label> From </label>
                            <div> { this.state.admin.from }</div>
                        </div>
                        <div className = "row">
                            <label> To </label>
                            <div> { this.state.admin.to }</div>
                        </div>
                       
                    </div>
                    
                </div>
                

        );
    }
}