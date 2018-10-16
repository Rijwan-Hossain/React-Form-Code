import React, { Component } from 'react';

class Forms extends Component { 


    state = {
        name: '',
        email: '',
        pass: '',
        message: '',
        country: 'Bangladesh',
        gender: '',
        skills: []
    } 

    submitHandler = (event) => { 
        event.preventDefault();

        console.log(this.state);
    } 

    changeHandler = (event) => { 

        // Checkbox is array
        // checked & unchecked  
        if(event.target.type === 'checkbox') { 
            let skills = [...this.state.skills]; 
            if(event.target.checked) { 
                skills.push(event.target.value); 
            } 
            else { 
                skills = this.state.skills.filter((value) => { 
                    return value !== event.target.value 
                }) 
            } 

            this.setState({ 
                skills: skills 
            }) 
        } 
        else { 
            this.setState({ 
                [event.target.name]: event.target.value 
            }) 
        } 
    } 


    render() { 
        return ( 
            <div> 
                <form onSubmit={ this.submitHandler } > 
                    <div className="form-group">
                        <input 
                            type="name"
                            name="name"
                            className="form-control col-sm-4 my-1"
                            placeholder="Enter Your Name" 
                            value={ this.state.name }
                            onChange={ this.changeHandler }
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="email"
                            name="email"
                            className="form-control col-sm-4 my-1"
                            placeholder="Enter Your Email" 
                            value={ this.state.email }
                            onChange={ this.changeHandler }
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="password"
                            name="pass"
                            className="form-control col-sm-4 my-1"
                            placeholder="Enter Your Password" 
                            value={ this.state.pass }
                            onChange={ this.changeHandler }
                        />
                    </div> 
                    <div className="form-group">
                        <textarea 
                            type="textarea"
                            name="message"
                            className="form-control col-sm-4 my-1"
                            placeholder="Enter Your Opinion" 
                            value={ this.state.message }
                            onChange={ this.changeHandler }
                        /> 
                    </div> 
                    <div className="form-group"> 
                        <select 
                            name="country" 
                            onChange={ this.changeHandler }
                            className="form-control col-sm-4 my-1">
                            <option name="Bangladesh">Bangladesh</option>
                            <option name="Germany">Germany</option>
                            <option name="Singapore">Singapore</option>
                            <option name="USA">United states of America</option>
                            <option name="UK">United kingdom</option>
                            <option name="China">China</option> 
                        </select> 
                    </div> 
                    <div className="form-group col-sm-6">
                        <input 
                            type="radio"
                            name="gender"
                            value="Male"
                            className="my-1 mx-2"
                            onChange={ this.changeHandler } 
                        /> 
                        Male
                        <input 
                            type="radio"
                            name="gender"
                            value="Femali"
                            className="my-1 mx-2"
                            onChange={ this.changeHandler } 
                        /> 
                        Female
                        <input 
                            type="radio"
                            name="gender"
                            value="Others"
                            className="my-1 mx-2"
                            onChange={ this.changeHandler } 
                        /> 
                        Others
                    </div> 
                    <div className="form-group col-sm-6">
                        <input 
                            type="checkbox"
                            name="skills"
                            value="Java"
                            className="my-1 mx-3"
                            onChange={ this.changeHandler } 
                        /> 
                        Java
                        <input 
                            type="checkbox"
                            name="skills"
                            value="JaveScript"
                            className="my-1 mx-3"
                            onChange={ this.changeHandler } 
                        /> 
                        JaveScript
                        <input 
                            type="checkbox"
                            name="skills"
                            value="React"
                            className="my-1 mx-3"
                            onChange={ this.changeHandler } 
                        /> 
                        React
                    </div> 

                    <button className="btn btn-primary">
                        Submit
                    </button>
                </form> 
            </div> 
        ) 
    } 
} 

export default Forms; 


