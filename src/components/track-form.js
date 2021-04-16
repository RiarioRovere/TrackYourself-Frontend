import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from "react-router";
import {fetchSignalNames, saveSignals, saveSummary} from "../actions/signal-actions";
import {Container, Col, Row, Form, Button} from "react-bootstrap";

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
        console.log(JSON.stringify(toSave))
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
                <Form.Control key={name} style={{'paddingTop': '5px', marginBottom: '10px'}}
                              placeholder={name}
                              id={name}
                              name={name}
                              type={'number'}
                              onChange={this.handleOnChangeSignal}
                >
                </Form.Control>
            )
        })

        return (
            <Container fluid>
                <div align={'center'} style={{paddingTop: '20px'}}>
                    <Col md={7} lg={4}>
                        <Form>
                            <Form.Group>
                                <Form.Control id='date' name='date' type={'date'}
                                              onChange={this.handleOnChange}
                                              style={{marginBottom: '10px'}}
                                />
                                {listItems}
                                <Form.Control as='textarea'
                                              id="summary"
                                              placeholder="summary"
                                              name="summary"
                                              value={this.state.summary}
                                              onChange={this.handleOnChange}
                                />
                            </Form.Group>
                            <Button color="primary" onClick={this.handleSubmit}>submit</Button>
                        </Form>
                    </Col>
                </div>
            </Container>
        )
    }
}

const mapStateToProps = ({signal: {signalNames}}) => {
    return {signalNames}
}

export default connect(mapStateToProps, {fetchSignalNames, saveSummary, saveSignals})(withRouter(TrackForm));