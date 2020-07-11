import React, {Component} from "react";
import WithApiService from "../hoc/with-api-service";

class SignalPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signals: {

            }
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let toSave = []
        Object.entries(this.state.signals).forEach(([key, value]) => toSave.push({
            name: key,
            value: value,
            date: this.state.date || new Date().toISOString().substring(0, 10)
        }))
        this.props.apiService.saveSignals(toSave)
    }

    handleOnChangeSignal = (e) => {
        const {name, value} = e.target
        this.setState( (prevState) => ({
            signals: {
                ...prevState.signals,
                [name]: value
            }
        }))
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
                           onChange={this.handleOnChangeSignal}
                    />
                    {name}
                </label>
            </li>
        })

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input name={'date'}
                           type={'date'}
                           onChange={this.handleOnChange}
                    />
                    date
                </label>

                <ul>{listItems}</ul>
                <input type="submit" value="Отправить" />
            </form>
        )
    }
}

export default WithApiService(SignalPage);