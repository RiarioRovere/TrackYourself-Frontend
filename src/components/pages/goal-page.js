import React, {Component} from 'react';
import {withRouter} from "react-router";
import Goal from "../goals/goal";

class GoalPage extends Component {
    render() {
        return (
            <Goal id={this.props.match.params.id}/>
        )
    }
}

export default withRouter(GoalPage);