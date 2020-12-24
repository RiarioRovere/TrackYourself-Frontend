import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Button, Grid, Typography} from "@material-ui/core";
import {deleteGoal, fetchGoal, updateGoal} from "../../actions/goal-actions";
import ReportList from "./report-list";
import {withRouter} from "react-router-dom";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
                <Grid container justify="flex-start">
                    <Grid item xs={12} md={5}>
                        <Typography variant="h3"> {goal.title} </Typography>
                        <Typography variant="body1">
                            <pre style={{ fontFamily: 'inherit'}}>
                                {goal.description}s
                            </pre>
                        </Typography>
                        <Grid container xs={15} justify={"flex-start"} md={5}>
                            {this.state.isMyGoal &&
                            <Button onClick={this.onDelete}>
                                delete goal
                            </Button>
                            }
                            {this.state.isMyGoal &&
                                <FormControlLabel
                                    control={<Switch checked={goal?.isPublic || false} onChange={this.handlePrivateChange} aria-label="visible switch"/>}
                                    label={goal?.isPublic ? 'Public' : 'Private'}
                                />
                            }
                        </Grid>
                        <ReportList isMyGoal={this.state.isMyGoal} goalId={this.props.id}/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = ({goal: {goal, deletedGoal}}) => {
    return {goal, deletedGoal}
}

export default connect(mapStateToProps, {updateGoal, deleteGoal, fetchGoal})(withRouter(Goal));

