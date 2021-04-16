import React, {Component} from 'react';
import {connect} from "react-redux";
import {addGoal} from "../../actions/goal-actions";
import {withRouter} from "react-router";
import {Col, Container, Form, Button} from "react-bootstrap";

class GoalForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.addedGoal === this.state.title + this.state.description) {
            this.props.history.push('/goals');
        }
    }

    handleChange = (e) => {
        const {value, id} = e.target
        this.setState({
            [id]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addGoal(this.state);
    }

    render() {
        return (
            <div>
                <Container fluid>
                    <div align={'center'} style={{marginTop: '10px'}}>
                        <h4>New goal!</h4>
                        <Col xs={9}>
                            <Form>
                                <Form.Group>
                                    <Form.Control id="title"
                                                  placeholder="title"
                                                  name="title"
                                                  value={this.state.title}
                                                  onChange={this.handleChange}
                                                  style={{marginBottom: '10px'}}
                                    />
                                    <Form.Control as='textarea'
                                                  id="description"
                                                  placeholder="description"
                                                  name="description"
                                                  value={this.state.description}
                                                  onChange={this.handleChange}
                                    />
                                </Form.Group>
                                <Button color="primary" type={'submit'} onClick={this.handleSubmit}>submit</Button>
                            </Form>
                        </Col>
                    </div>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = ({goal: {addedGoal}}) => {
    return {addedGoal}
}

export default connect(mapStateToProps, {addGoal})(withRouter(GoalForm));