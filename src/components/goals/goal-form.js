import React, {Component} from 'react';
import {Button, FormGroup, Grid, TextField} from "@material-ui/core";
import {connect} from "react-redux";
import {addGoal} from "../../actions/goal-actions";
import {withRouter} from "react-router";

class GoalForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.addedGoal === this.state.title + this.state.description) {
            this.props.history.push('/goals');
        }
    }

    handleChange = (e) => {
        const {value, id} = e.target
        this.setState({
            [id]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addGoal(this.state);
    }

    render() {
        return (
            <div>
                <Grid container alignItems="center">
                    <FormGroup>
                        <TextField
                            margin="dense"
                            id="title"
                            label="title"
                            type="text"
                            name="title"
                            multiline={true}
                            value={this.state.title}
                            onChange={this.handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            margin="dense"
                            id="description"
                            label="description"
                            type="text"
                            name="description"
                            multiline={true}
                            value={this.state.description}
                            onChange={this.handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                        <Button color="primary" onClick={this.handleSubmit}>submit</Button>
                    </FormGroup>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = ({goal: {addedGoal}}) => {
    return {addedGoal}
}

export default connect(mapStateToProps, {addGoal})(withRouter(GoalForm));