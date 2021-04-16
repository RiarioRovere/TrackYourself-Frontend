import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {fetchGoals} from "../../actions/goal-actions";
import {Container, Row, Card, Nav} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'


class GoalsList extends Component {
    componentDidMount() {
        this.props.fetchGoals(this.props.username);
    }

    render() {
        const listItems = this.props.goals.map(({title, id}) => {
            return (
                <LinkContainer style={{ width: '20rem', margin: '10px' }} to={`/goal/${id}`}>
                    <Card >
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                        </Card.Body>
                    </Card>
                </LinkContainer>
            );
        });
        return (
            <Container>
                <div align={'center'}>
                    <h4>Goals</h4>
                </div>
                <Row>
                    {listItems}
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = ({goal: {goals}}) => {
    return {goals}
}

export default connect(mapStateToProps, {fetchGoals})(GoalsList);