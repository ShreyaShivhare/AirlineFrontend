import React, { Component } from "react";


export default class AddPassenger extends Component {

    state =
        {
            Name: "",
            Age: "",
            Gender: ""
        };

    handleNameChange = (event) => {
        this.setState({
            Name: event.target.value
        });
    };
    handleAgeChange = (event) => {
        this.setState({
            Age: event.target.value
        });
    }
    handleGenderChange = (event) => {
        this.setState({
            Gender: event.target.value
        });
    };

    handleToDoSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd({
            Name: this.state.Name,
            Age: this.state.Age,
            Gender: this.state.Gender
        });
        this.setState({
            Name: "",
            Age: "",
            Gender: ""
        });
    };

    render() {
        return (
            <div>
                <div className="card">
                    <h3>Add Passenger</h3>
                    <form onSubmit={this.handleToDoSubmit}>

                        <div className="form-group">
                            <input type="text" value={this.state.Name} onChange={this.handleNameChange} className="form-control" placeholder="Enter Name"></input>
                        </div>

                        <div className="form-group">
                            <input type="number" value={this.state.Age} onChange={this.handleAgeChange} className="form-control" placeholder="Enter Age"></input>
                        </div>

                        <div className="form-group">
                            <select value={this.state.Gender} onChange={this.handleGenderChange} className="form-control" placeholder="Gender">
                                <option value={"Male"}>Male</option>
                                <option value={"Female"}>Female</option>
                            </select>
                        </div>
                        <button type="submit" className="form-control btn btn-success"> Add </button>
                    </form>
                </div>
            </div>


        );
    }
}