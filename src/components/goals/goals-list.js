import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button, Grid, Typography} from "@material-ui/core";
import {connect} from "react-redux";
import {fetchGoals} from "../../actions";

class GoalsList extends Component {
    componentDidMount() {
        this.props.fetchGoals();
    }

    render() {
        const listItems = this.props.goals.map(({title, id}) => {
            return (
                <Button component={Link} key={title} to={`/goal/${id}`}>
                    {title}
                </Button>
            );
        });
        return (
            <div>
                <Grid container justify="flex-start">
                    <Grid item xs={12} lg={5}>
                        <Typography variant="h4">Goals</Typography>
                        {listItems}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = ({goals}) => {
    return {goals}
}

export default connect(mapStateToProps, {fetchGoals})(GoalsList);