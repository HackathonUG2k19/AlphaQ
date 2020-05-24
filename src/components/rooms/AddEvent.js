import React, { Component } from 'react'
import { connect } from 'react-redux';

import { addEvent } from '../../store/actions/eventActions';

import './AddEvent.css';

class AddEvent extends Component {
    state = {
        name: "",
        desc: "",
        venue: "",
        time: "",
        date: "",
        roomID: ""
    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addEvent(this.state);
        this.setState({ name: "", desc: "", venue: "", time: "", date: "" });
        document.querySelectorAll('label').forEach(label => label.style.transform = "translateY(-2rem) scale(1)");
        this.props.history.push(`/room/${this.state.roomID}`);
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
        this.setState({ roomID: this.props.location.pathname.split('/')[2] });
    }
    render() {
        return (
            <div className='AddEvent container-fluid mt-3'>
                <form className='d-flex-column align-items-center' onSubmit={this.handleSubmit}>
                    <h1 className='form-title display-3 text-center'>Add an Event</h1>
                    <div className='row col-8 mx-auto'>
                        <div className='field'>
                            <input type='text' id='name' name='name' className='input' placeholder=" " value={this.state.name} onChange={this.handleChange} autoComplete='off' />
                            <label htmlFor='name' className='label'>Name of the Event</label>
                        </div>
                    </div>
                    <div className='row col-8 mx-auto'>
                        <div className='field'>
                            <input type='text' id='desc' name='desc' className='input' placeholder=" " value={this.state.desc} onChange={this.handleChange} autoComplete='off' />
                            <label htmlFor='desc' className='label'>Short Description of the Event</label>
                        </div>
                    </div>
                    <div className='row justify-content-center col-12 mx-auto'>
                        <div className='field col-3 mx-2'>
                            <input type='text' id='venue' name='venue' className='input' placeholder=" " value={this.state.venue} onChange={this.handleChange} autoComplete='off' />
                            <label htmlFor='venue' className='label'>Venue</label>
                        </div>
                        <div className='field col-3 mx-2'>
                            <input type='text' id='time' name='time' className='input' placeholder=" " value={this.state.time} onChange={this.handleChange} autoComplete='off' />
                            <label htmlFor='time' className='label'>Time</label>
                        </div>
                        <div className='field col-3 mx-2'>
                            <input type='text' id='date' name='date' className='input' placeholder=" " value={this.state.date} onChange={this.handleChange} autoComplete='off' />
                            <label htmlFor='date' className='label'>Date (DD/MM/YYYY)</label>
                        </div>
                    </div>
                    <div className='row col-12 justify-content-end'>
                        <div className='submission-field'>
                            <input type='submit' className='submit' />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addEvent: (event) => dispatch(addEvent(event))
    }
}

export default connect(null, mapDispatchToProps)(AddEvent);
