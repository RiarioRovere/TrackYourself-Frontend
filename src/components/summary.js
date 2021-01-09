import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Grid, TextField} from "@material-ui/core";
import {fetchSummary, setInspectingDate} from "../actions/signal-actions"

class SummaryViewer extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.inspectingDate !== prevProps.inspectingDate) {
            this.props.fetchSummary(this.props.inspectingDate);
        }
    }

    handleOnChange = (e) => {
        this.props.setInspectingDate(e.target.value);
        this.props.fetchSummary(e.target.value);
    }

    render() {
        return (
            <Grid  container direction="column">
                <Grid item xs={10} lg={3}>
                    <TextField margin="dense" id="date" label="date" type="date" name="date"
                               value={this.props.inspectingDate} onChange={this.handleOnChange}
                        InputLabelProps={{
                            shrink: true,
                        }} variant="outlined" />
                    <TextField multiline={true} margin="dense" disabled={true} id="summary" label="summary"
                               type="text" name="summary" value={this.props.summary}
                        InputLabelProps={{
                            shrink: true,
                        }} variant="outlined" />
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = ({signal: {summary, inspectingDate}}) => {
    return {summary, inspectingDate}
}

export default connect(mapStateToProps, {fetchSummary, setInspectingDate})(SummaryViewer);