import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Button, Grid, Typography} from "@material-ui/core";
import {deleteGoal, fetchGoal} from "../../actions/goal-actions";
import ReportList from "./report-list";
import {withRouter} from "react-router-dom";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

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

    isVisibleForm = () => {
        const [auth, setAuth] = React.useState(true);

        const handleChange = (event) => {
            setAuth(event.target.checked);
        };

        return (
            <FormGroup>
                <FormControlLabel
                    control={<Switch checked={auth} onChange={handleChange} aria-label="visible switch"/>}
                    label={auth ? 'Public' : 'Private'}
                />
            </FormGroup>
        )
    }

    render() {
        const goal = this.props.goal;
        return (
            <div>
                <Grid container justify="flex-start">
                    <Grid item xs={12} md={5}>
                        <Typography variant="h2"> {goal.title} </Typography>
                        <Typography variant="body1"> {goal.description} </Typography>
                        {this.state.isMyGoal &&
                        <Button onClick={this.onDelete}>
                            delete goal
                        </Button>
                        }
                        {this.state.isMyGoal &&
                        <this.isVisibleForm />
                        }
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

export default connect(mapStateToProps, {deleteGoal, fetchGoal})(withRouter(Goal));