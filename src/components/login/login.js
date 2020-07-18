import React, {Component} from "react";
import {connect} from "react-redux";
import WithApiService from "../hoc/with-api-service";
import * as actions from "../../actions";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

class LoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.fetchAccessToken(this.props.apiService, this.state.username, this.state.password)
    }


    handleOnChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>username</label>
                <input name={'username'}
                       type={'text'}
                       onChange={this.handleOnChange}
                />
                <label>password</label>
                <input name={'password'}
                       type={'password'}
                       onChange={this.handleOnChange}
                />
                <input type="submit" value="Отправить" />
            </form>
        )
    }
}

export default connect(null, actions)(WithApiService(LoginForm));