import React, {Component} from 'react'
import {connect} from 'react-redux'
import WithApiService from "../hoc/with-api-service";

class TrackForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signals: {}
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
        this.setState((prevState) => ({
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
    }

    render() {
        const listItems = this.props.apiService.getSignalNames().map((name) => {
            return (
                <div className="form-group">
                    <label htmlFor={name}>{`${name}:`}</label>
                    <input name={name}
                           type={'number'}
                           className={'form-control'}
                           onChange={this.handleOnChangeSignal}
                    />
                </div>
            )
        })

        return (
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-6'}>
                        <a>{this.props.token}</a>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor='date'>{'date:'}</label>
                                <input name={'date'}
                                       type={'date'}
                                       className={'form-group'}
                                       onChange={this.handleOnChange}
                                />
                            </div>
                            {listItems}
                            <input type="submit" className={"btn btn-primary"} value="Отправить"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default WithApiService(TrackForm);