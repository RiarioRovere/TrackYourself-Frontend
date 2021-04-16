import React, {Component} from "react";
import GoalsList from "../goals/goals-list";
import {LinkContainer} from "react-router-bootstrap";
import {Button} from "react-bootstrap";

class GoalsPage extends Component {
    render() {
        return (
            <div>
                <GoalsList/>
                <LinkContainer style={{marginLeft: '15px'}} to={`/new-goal`}>
                    <Button>new goal</Button>
                </LinkContainer>
            </div>
        )
    }
}

export default GoalsPage;