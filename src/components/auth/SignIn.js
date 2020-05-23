import React, { Component } from 'react'

import './SignIn.css';

class SignIn extends Component {
    state = {
        email: "",
        password: "",
        showPassword: false
    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.setState({ email: "", password: "" });
        document.querySelectorAll('label').forEach(label => label.style.transform = "translateY(-2rem) scale(1)");
    }
    componentDidMount() {
        document.querySelector('#toggle-password').addEventListener("mouseenter", () => this.setState({ showPassword: true }))
        document.querySelector('#toggle-password').addEventListener("mouseleave", () => this.setState({ showPassword: false }))
        document.querySelectorAll('.input').forEach(input => {
            input.addEventListener("focus", () => {
                document.querySelector(`label[for=${input.name}]`).style.transform = "translateY(-4rem) scale(0.8)";
            })
        })
        document.querySelectorAll('.input').forEach(input => {
            input.addEventListener("blur", () => {
                if (input.value === "")
                    document.querySelector(`label[for=${input.name}]`).style.transform = "translateY(-2rem) scale(1)";
            })
        })
    }
    render() {
        return (
            <div className='SignIn container mt-5'>
                <form onSubmit={this.handleSubmit}>
                    <h1 className='form-title text-center display-3'>Sign In</h1>
                    <div className='row'>
                        <div className='field col-8'>
                            <input type='email' id='email' name='email' className='input' placeholder=" " value={this.state.email} onChange={this.handleChange} autoComplete='off' />
                            <label htmlFor='email' className='label'>Email</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='field col-8'>
                            <input type={this.state.showPassword ? 'text' : 'password'} id='password' name='password' className='input' placeholder=" " value={this.state.password} onChange={this.handleChange} />
                            <span id='toggle-password'>{this.state.showPassword ? "🙈" : "👁️"}</span>
                            <label htmlFor='password' className='label'>Password</label>
                        </div>
                    </div>
                    <div className='row justify-content-end px-5'>
                        <div className='submission-field'>
                            <input type='submit' className='submit' />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
};

export default SignIn;
