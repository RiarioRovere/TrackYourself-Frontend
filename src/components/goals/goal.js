import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Grid, Typography} from "@material-ui/core";
import * as actions from "../../actions";
import ReportList from "./report-list";

class Goal extends Component {
    componentDidMount() {
        this.props.fetchGoal(this.props.id);
    }

    render() {
        const goal = this.props.goal;
        return (
            <div>
                <Grid container justify="flex-start">
                    <Grid item xs={12} lg={5}>
                        <Typography variant="h2"> {goal.title} </Typography>
                        <Typography variant="body1"> {goal.description} </Typography>
                        <ReportList goalId={this.props.id}/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = ({goal}) => {
    return {goal}
}

export default connect(mapStateToProps, actions)(Goal);