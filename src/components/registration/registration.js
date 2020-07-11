import React, {Component} from "react";
import WithApiService from "../hoc/with-api-service";

class Registration extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)

        fetch(`${this.props.apiService.apiUrl}/user/register`, {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(v => {
            console.log(v)
            // if(v.redirected) window.location = v.url
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
                    <span>username</span>
                </label>
                <label>
                    <input name={'password'}
                           type={'password'}
                           onChange={this.handleOnChange}
                    />
                    <span>password</span>
                </label>
                <input type="submit" value="Отправить" />
            </form>
        )
    }
}

export default WithApiService(Registration);