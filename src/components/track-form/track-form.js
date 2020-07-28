import React, {Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from "react-router";
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import * as actions from "../../actions";

class TrackForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signals: {},
            summary: ''
        }
    }

    componentDidMount() {
        this.props.fetchSignalNames();
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
        this.props.saveSummary(this.state.summary, this.state.date)
        this.props.history.push('/analyze')
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
                <FormControl style={{'padding-top': '5px'}}>
                    <TextField
                        margin="dense"
                        label={name}
                        id={name}
                        name={name}
                        type={'number'}
                        onChange={this.handleOnChangeSignal}
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>
            )
        })

        return (
            <Grid container justify="center">
                <Grid item xs={5} lg={2}>
                    <FormGroup>
                        <FormControl style={{'padding-top': '10px'}}>
                            <TextField
                                id="date"
                                label="date"
                                type="date"
                                name="date"
                                onChange={this.handleOnChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                            />
                        </FormControl>
                        {listItems}
                        <TextField
                            margin="dense"
                            id="summary"
                            label="summary"
                            type="text"
                            name="summary"
                            multiline={true}
                            value={this.state.summary}
                            onChange={this.handleOnChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
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

export default connect(mapStateToProps, actions)(withRouter(TrackForm));