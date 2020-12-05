import React, {Component} from 'react';
import {Button, FormGroup, Grid, TextField, Typography} from "@material-ui/core";
import {connect} from "react-redux";
import {deleteReport, fetchReports, saveReport} from "../../actions/goal-actions";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

class ReportList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }

    componentDidMount() {
        this.props.fetchReports(this.props.goalId);
    }

    handleChange = (e) => {
        const {value, id} = e.target
        this.setState({
            [id]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.saveReport(this.state, this.props.goalId);
        this.setState({content: ''})
    }

    handleRemove = async (id) => {
        await this.props.deleteReport(id);
        await this.props.fetchReports(this.props.goalId);
    }

    render() {
        const listItems = this.props.reports?.map(({content, id}) => {
            return (
                <Grid container key={content} alignItems="center">
                    {/* TODO: Change layout to be cool */}
                    <Grid item xs={9}>
                        <p>{content}</p>
                    </Grid>
                    <IconButton name={content} onClick={() => this.handleRemove(id)}>
                        <HighlightOffIcon/>
                    </IconButton>
                </Grid>
            );
        });
        listItems.reverse()
        return (
            <div>
                <Grid container justify="flex-start">
                    <Grid item xs={12} md={5}>
                        <Typography variant="h4">Reports</Typography>
                        <FormGroup>
                            <TextField
                                margin="dense"
                                id="content"
                                label="new report"
                                type="text"
                                name="content"
                                multiline={true}
                                value={this.state.content}
                                onChange={this.handleChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                            />
                            <Button color="primary" onClick={this.handleSubmit}>save</Button>
                        </FormGroup>
                        <ul>
                            {listItems}
                        </ul>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = ({goal: {reports}}) => {
    return {reports}
}

export default connect(mapStateToProps, {fetchReports, saveReport, deleteReport})(ReportList);