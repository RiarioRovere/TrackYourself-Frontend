import React, {Component} from 'react';
import {withRouter} from "react-router";
import Viewer from "../insights/viewer/viewer";

class InsightPage extends Component {
    render() {
        return (
            <Viewer id={this.props.match.params.id}/>
        )
    }
}

export default withRouter(InsightPage);