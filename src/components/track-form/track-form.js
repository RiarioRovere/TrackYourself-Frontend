import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, FormControl, FormGroup, Grid, Input, InputLabel, TextField} from "@material-ui/core";
import * as actions from "../../actions";

class TrackForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signals: {}
        }
    }

    componentDidMount() {
        this.props.fetchSignalsNames();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let toSave = []
        Object.entries(this.state.signals).forEach(([key, value]) => toSave.push({
            name: key,
            value: value,
            date: this.state.date || new Date().toISOString().substring(0, 10)
        }))
        this.props.saveSignals(toSave);
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
        const listItems = this.props.signalNames.map((name) => {
            return (
                <FormControl>
                    <InputLabel htmlFor={name}>{`${name}:`}</InputLabel>
                    <Input id={name}
                           name={name}
                           type={'number'}
                           onChange={this.handleOnChangeSignal}
                    />
                </FormControl>
            )
        })

        return (
            <Grid container justify="center">
                <Grid item xs={5} lg={2}>
                    <FormGroup>
                        <FormControl>
                            <TextField
                                id="date"
                                label="date"
                                type="date"
                                name="date"
                                onChange={this.handleOnChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </FormControl>
                        {listItems}
                        <Button color="primary" onClick={this.handleSubmit}>submit</Button>
                    </FormGroup>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = ({signalNames}) => {
    return {signalNames}
}

export default connect(mapStateToProps, actions)(TrackForm);