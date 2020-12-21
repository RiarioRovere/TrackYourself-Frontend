import React, {Component} from "react";
import GoalsList from "../goals/goals-list";
import {withRouter} from "react-router";

class UserPage extends Component {
    render() {
        return (
            <GoalsList username={this.props.match.params.username} />
        )
    }
}

export default withRouter(UserPage);