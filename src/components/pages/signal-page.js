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
        let toSave = []
        Object.entries(this.state).forEach(([key, value]) => toSave.push({
            name: key,
            value: value
        }))
        this.props.apiService.saveSignals(toSave)
    }

    handleOnChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        const listItems = this.props.apiService.getSignalNames().map((name) => {
            return <li>
                <label>
                    <input name={name}
                           type={'number'}
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