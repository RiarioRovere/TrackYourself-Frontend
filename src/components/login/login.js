import React, {Component} from "react";
import WithApiService from "../hoc/with-api-service";

class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        let formData = new FormData();

        formData.append('username', this.state.username);
        formData.append('password', this.state.password);
        fetch(`${this.props.apiService.apiUrl}/login`, {
            method: 'POST',
            body: new URLSearchParams(formData),
            credentials: "include"
        })
        .then(v => {
            console.log(v)
            if(v.redirected) window.location = v.url
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
                <label>
                    <input name={'username'}
                           type={'text'}
                           onChange={this.handleOnChange}
                    />
                    <a>username</a>
                </label>
                <label>
                    <input name={'password'}
                           type={'password'}
                           onChange={this.handleOnChange}
                    />
                    <a>password</a>
                </label>
                <input type="submit" value="Отправить" />
            </form>
        )
    }
}

export default WithApiService(Login);