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
            console.log(content)
            return (
                <Grid item container key={content} alignItems="center" justify="center">
                    <Grid item xs={10} spacing={0} alignItems={"center"}>
                        <Typography variant="body1"
                                    style={{ "wordWrap": "break-word", "white-space": "pre-wrap"}}>
                            {content}
                        </Typography>
                    </Grid>
                    {this.props.isMyGoal &&
                        <IconButton size={"small"} name={content} onClick={() => this.handleRemove(id)}>
                            <HighlightOffIcon/>
                        </IconButton>
                    }
                </Grid>
            );
        });
        listItems.reverse()
        return (
            <div>
                <Grid container justify="flex-start">
                    <Grid item xs={12} md={5}>
                        <Typography variant="h4" align={"center"}>Reports</Typography>
                        {this.props.isMyGoal &&
                            <FormGroup>
                                <TextField
                                    margin="dense" id="content" label="new report" type="text" name="content" multiline={true}
                                    value={this.state.content} onChange={this.handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }} variant="outlined" />
                                <Button color="primary" onClick={this.handleSubmit}>save</Button>
                            </FormGroup>
                        }
                        <Grid container direction={"column"} spacing={2}>
                            {listItems}
                        </Grid>
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