import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchAccessToken} from "../actions/signal-actions";
import './login.css'

class LoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('login', this.state.username)
        console.log(JSON.stringify(this.state))
        this.props.fetchAccessToken(this.state.username, this.state.password)
    }


    handleOnChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className={'login text-center'}>
                <form className="form-signin">
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="login" className="sr-only">Email address</label>
                    <input type="text" name={'username'} id="login" className="form-control" placeholder="username"
                           required autoFocus onChange={this.handleOnChange}/>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input type="password" id="password" name={'password'} className="form-control" placeholder="password" required onChange={this.handleOnChange}/>
                    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleSubmit}>Sign in</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {fetchAccessToken})(LoginForm);