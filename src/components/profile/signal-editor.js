import React, {Component} from "react";
import {connect} from 'react-redux'
import {addSignalName, deleteSignalName, fetchSignalNames} from '../../actions/signal-actions'
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {BiTrash} from "react-icons/all";

class SignalEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newSignal: ''
        }
    }
    componentDidMount() {
        this.props.fetchSignalNames();
    }

    handleRemove = (name) => {
        this.props.deleteSignalName(name);
    }

    handleChange = (e) => {
        const {value} = e.target
        this.setState({
            newSignal: value
        })
    }

    handleAdd = (e) => {
        e.preventDefault()
        this.props.addSignalName(this.state.newSignal);
        this.setState({
            newSignal: ''
        })
    }

    render() {
        const signalNamesMapped = this.props.signalNames.map((name) => {
            return (
                <li className={'list-group-item'}>
                    <Row fluid>
                        <Col xs={8}>
                            <p>{name}</p>
                        </Col>
                        <Col>
                            <div align={'right'}>
                                <Button variant={'light'} name={name} onClick={() => this.handleRemove(name)}>
                                    <BiTrash className={'btn-outline-danger'}/>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </li>
            )
        })
        return (
            <Container fluid>
                <h4 align={"center"}>Signals</h4>
                <ul style={{paddingTop: '30px'}} className={'list-group'}>
                    {signalNamesMapped}
                </ul>
                <Row>
                    <Col xs={12}>
                        <Form style={{paddingTop: '15px'}}>
                            <Form.Group>
                                <Form.Control id="newSignal" name="newSignal"
                                              value={this.state.newSignal} onChange={this.handleChange} />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={this.handleAdd}>save</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = ({signal: {signalNames}}) => {
    return {signalNames}
}

export default connect(mapStateToProps, {addSignalName, fetchSignalNames, deleteSignalName})(SignalEditor);