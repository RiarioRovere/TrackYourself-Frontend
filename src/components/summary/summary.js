import React, {Component} from 'react'
import {connect} from 'react-redux'
import {TextField, Grid} from "@material-ui/core";
import {fetchSummary} from "../../actions"

class SummaryViewer extends Component {
    constructor() {
        super();
        this.state = {
            date: '',
        }
    }

    handleOnChange = (e) => {
        this.setState({
            date: e.target.value
        })
        this.props.fetchSummary(e.target.value);
    }

    render() {
        return (
            <Grid  container direction="column">
                <Grid item xs={10} lg={3}>
                    <TextField
                        margin="dense"
                        id="date"
                        label="date"
                        type="date"
                        name="date"
                        onChange={this.handleOnChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        multiline={true}
                        margin="dense"
                        disabled={true}
                        id="summary"
                        label="summary"
                        type="text"
                        name="summary"
                        value={this.props.summary}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                </Grid>
            </Grid>
    )
    }
}

const mapStateToProps = ({summary}) => {
    return {summary}
}

export default connect(mapStateToProps, {fetchSummary})(SummaryViewer);