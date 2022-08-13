import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddPassenger from "./AddPassenger";
import FlightDetails from "./FlightDetails";
import '../style/addpassenger.css'

/*
In React we are using JSX syntax so here we can display this array using this.state.todos.map().
This map() will iterate each item of the loop and display it one by one.
*/

export default class PassengerList extends Component {


    state = {
        todos: [
            { Name: 'Prakhar', Age: '22', Gender: 'Male' },
            { Name: 'James', Age: '19', Gender: 'Female' }
        ]
    };

    /**
      deleteToDo() function will expect an argument — which list item is going to be deleted.
this.setState(), we have to use it to update our todo array.
In function we are just filtering our array-like we do normally.
     */

    deleteToDo = (todo) => {
        const filteredItems = this.state.todos.filter(x => x.Name !== todo.Name);
        this.setState({
            todos: filteredItems
        });
    };

    /*
Here note this line …todo inside this editToDo() function. This three dots(…) is called as Spread Operator. 
By using this, it will keep our todos array intact.
In the next line, we are just updating the value of the status attribute, so the other two attributes — id and title will not be changed.
*/

    editToDo = (x) => {
        this.setState(state => ({
            todos: state.todos.map(todo => {
                if (todo.Name === x.Name) {
                    return {
                        ...todo,
                        Gender: todo.Gender === "Male" ? "Female" : "Male"
                    };
                } else {
                    return todo;
                }
            })
        }));
    };

    addToDo = (todo) => {
        this.setState({
            todos: [...this.state.todos, todo]
        });
};


    render() {
        
        return (
            
          
            <div>    
                <div>
            <div className='card4'>
                <h2> Flight Details:</h2>

                <div className="row">
                    <label> Flight Id: </label>
                     
                </div>
            
                <div className="row">
                    <label> From: </label>
                   
                </div>
                <div className="row">
                    <label> To: </label>
                     
                    </div>

                    </div>
                     
                <AddPassenger onAdd={this.addToDo}></AddPassenger>
                <div className="contentBx1">
                <h1>Passenger Details </h1>

                <table className="table table-striped table-dark" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map(x => {
                            return (
                                <tr key={x.Name}>
                                    <td>{x.Name}</td>
                                    <td>{x.Age}</td>
                                    <td style={{ color: x.Gender === "Male" ? "yellow" : "red" }}>{x.Gender}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => this.deleteToDo(x)}>
                                            <span>
                                                <FontAwesomeIcon icon="trash"></FontAwesomeIcon>
                                            </span>
                                        </button>

                                        <button className="btn btn-primary" onClick={() => this.editToDo(x)}>
                                            <span>
                                                <FontAwesomeIcon icon="edit"></FontAwesomeIcon>
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                </div>
            </div>
            </div>
            
        );
    }
}