import React,{ Component } from 'react';
import './Form.css'

class Form extends Component {

    state = {
        email: "", 
        password: "",
        emailError: "", 
        passError: ""
    }

    render() {
        const menu = ['Home', 'Blogs', 'Products', 'About Us', 'Contact Us'];
        const menuList = menu.map((m, i) => {
            return (
                <li key={i}>{m}</li>
            );
        });
        return (
            <>
                <form onSubmit={this.submitForm} className="form-wrapper">
                    <label>Email: </label><br />
                    <input type="text" name="email" onChange={(e) => {this.setState({[e.target.name]:e.target.value})}}/><br />
                    <p className="error-message">{this.state.emailError}</p>
                    <label>Password: </label><br />
                    <input type="text" name="password" onChange={(e) => {this.setState({[e.target.name]:e.target.value})}}/><br />
                    <p className="error-message">{this.state.passError}</p>
                    <button type="submit">Submit</button>
                </form>

                <ul style={{'listStyle': 'none'}}>
                    {menuList}
                </ul>
            </>
        );
    }

    submitForm = (event) => {
        event.preventDefault();
        
        if(this.validate()) {
            console.log('Sumit is Done!');
        }
    }

    validate = () => {
        if( this.state.email < 1 && this.state.password < 1 ) {
            this.setState({
                emailError:"Email is Required!"
            });
            this.setState({
                passError:"Password is Required!"
            });
        } else if(this.state.email < 1) {
            this.setState({
                emailError:"Email is Required!"
            });
        } else if (this.state.password < 1 ) {
            this.setState({
                passError:"Password is Required!"
            });
        } else {
            return true;
        }
    }
}

export default Form;