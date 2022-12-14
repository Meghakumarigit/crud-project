import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

export default class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            emailId: ''

        }
        console.log("hello")
        //this.changeFirstNameHandle = this.changeFirstNameHandle.bind(this);
        //this.changeLastNameHandle = this.changeLastNameHandle.bind(this);
        //this.changeEmailIdHandle = this.changeEmailIdHandle.bind(this);
        //this.saveEmployee = this.saveEmployee.bind(this);
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(res => {
            this.props.history.push('/employees');
        });
    }

    changeFirstNameHandle=(event) =>{
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandle=(event) =>{
        this.setState({lastName: event.target.value});
    }

    changeEmailIdHandle=(event) =>{
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }


  render() {
    return (
      <div>
        <div className=" container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-centre">Add Employee</h3>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>First Name:</label>
                                <input placeholder="First Name" name= "firstName" className="form-control"
                                value={this.state.firstName} onChange={this.changeFirstNameHandle}/>
                            </div>
                            <div className="form-group">
                                <label>Last Name:</label>
                                <input placeholder="Last Name" name= "lastName" className="form-control"
                                value={this.state.lastName} onChange={this.changeLastNameHandle}/>
                            </div>
                            <div className="form-group">
                                <label>Email Id:</label>
                                <input placeholder="Email Id" name= "emailId" className="form-control"
                                value={this.state.emailId} onChange={this.changeEmailIdHandle}/>
                            </div>

                            <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                            <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft: "10px"}}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}


