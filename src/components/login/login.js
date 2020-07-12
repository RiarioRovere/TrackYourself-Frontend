import React, {Component} from "react";
import WithApiService from "../hoc/with-api-service";

class LoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)

        fetch(`${this.props.apiService.apiUrl}/user/authenticate`, {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(data => data.json())
        .then(v => {
            localStorage.setItem('token', v.token)
            window.location.reload(false);
        })
        .catch(e => console.warn(e))
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

export default WithApiService(LoginForm);