import React, { Component } from 'react'

import './CreateRoom.css';

class CreateRoom extends Component {
    state = {
        name: "",
        tagline: "",
    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.setState({ name: "", tagline: "" });
        document.querySelectorAll('label').forEach(label => label.style.transform = "translateY(-2rem) scale(1)");
    }
    componentDidMount() {
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
            <div className='AddEvent container-fluid mt-5'>
                <form className='d-flex-column align-items-center' onSubmit={this.handleSubmit}>
                    <h1 className='form-title display-3 text-center'>Create A New Room</h1>
                    <div className='row col-8 mx-auto'>
                        <div className='field'>
                            <input type='text' id='name' name='name' className='input' placeholder=" " value={this.state.name} onChange={this.handleChange} autoComplete='off' />
                            <label htmlFor='name' className='label'>Name of the Room</label>
                        </div>
                    </div>
                    <div className='row col-8 mx-auto'>
                        <div className='field'>
                            <input type='text' id='tagline' name='tagline' className='input' placeholder=" " value={this.state.tagline} onChange={this.handleChange} autoComplete='off' />
                            <label htmlFor='tagline' className='label'>Tagline</label>
                        </div>
                    </div>
                    <div className='row col-12 justify-content-end'>
                        <div className='submission-field'>
                            <input type='submit' className='submit' />
                        </div>
                    </div>
                </form>
            </div >
        )
    }
};

export default CreateRoom;
