import React, {Component} from "react";
import WithApiService from "../hoc/with-api-service";

class SignalPage extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //
    //     // }
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    handleOnChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    render() {
        const listItems = this.props.apiService.getSignalNames().map((name) => {
            return <li>
                <label>
                    <input name={name}
                           type={'number'}
                           // value={''}
                           onChange={this.handleOnChange}
                    />
                    {name}
                </label>
            </li>
        })

        return (
            <form onSubmit={this.handleSubmit}>
                <ul>{listItems}</ul>
                <input type="submit" value="Отправить" />
            </form>
        )
    }
}

export default WithApiService(SignalPage);