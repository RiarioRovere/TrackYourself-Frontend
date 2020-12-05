import React, {Component} from "react";
import GoalsList from "../goals/goals-list";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

class GoalsPage extends Component {
    render() {

        return (
            <div>
                <GoalsList/>
                <Button component={Link} to={`/new-goal`}>
                    add goal
                </Button>
            </div>
        )
    }
}

export default GoalsPage;