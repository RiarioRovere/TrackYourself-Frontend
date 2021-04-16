import React, {Component} from 'react';
import {connect} from 'react-redux'
import {deleteGoal, fetchGoal, updateGoal} from "../../actions/goal-actions";
import ReportList from "./report-list";
import {withRouter} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import {Container, Row, Col, Dropdown, Jumbotron} from "react-bootstrap";
import {Typography} from "@material-ui/core";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './goals.css'

class Goal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMyGoal: false
        }
    }
    componentDidMount() {
        this.props.fetchGoal(this.props.id);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.deletedGoal === this.props.id) {
            this.props.history.push('/goals')
        }

        if (prevProps.goal !== this.props.goal) {
            const isMyGoal = localStorage.getItem('login') === this.props.goal.username
            this.setState({
                isMyGoal
            })
        }
    }

    onDelete = () => {
        this.props.deleteGoal(this.props.id)
    }

    handlePrivateChange = (e) => {
        this.props.updateGoal(this.props.id, {isPublic: e.target.checked})
        // this.setState({
        //     isPublic: e.target.checked
        // })
    }

    render() {
        const goal = this.props.goal;
        return (
            <div>
                <Container>
                    <Row fluid>
                    <Col xs={9}>
                        <Jumbotron>
                            <h4>{goal.title}</h4>
                            <pre style={{ fontFamily: 'inherit'}}>
                                {goal.description}s
                            </pre>
                        </Jumbotron>
                    </Col>
                        <Col xs={3}>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    menu
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {this.state.isMyGoal &&
                                    <Dropdown.Item variant={'danger'} onClick={this.onDelete}>delete</Dropdown.Item>
                                    }
                                    <Dropdown.Item>
                                        {this.state.isMyGoal &&
                                        <FormControlLabel
                                            control={<Switch checked={goal?.isPublic || false} onChange={this.handlePrivateChange} aria-label="visible switch"/>}
                                            label={goal?.isPublic ? 'Public' : 'Private'}
                                        />
                                        }
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>

                    <ReportList isMyGoal={this.state.isMyGoal} goalId={this.props.id}/>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = ({goal: {goal, deletedGoal}}) => {
    return {goal, deletedGoal}
}

export default connect(mapStateToProps, {updateGoal, deleteGoal, fetchGoal})(withRouter(Goal));

