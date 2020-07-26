import React, {Component} from 'react'
import {connect} from 'react-redux'
import {TextField, Grid} from "@material-ui/core";
import * as actions from "../../actions"

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
            <Grid xs={10} container direction="column">
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
    )
    }
}

const mapStateToProps = ({summary}) => {
    return {summary}
}

export default connect(mapStateToProps, actions)(SummaryViewer);