import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Grid, Typography} from "@material-ui/core";
import {fetchInsight} from "../../actions/signal-actions";

class InsightsViewer extends Component {
    componentDidMount() {
        this.props.fetchInsight(this.props.id);
    }

    render() {
        return (
            <div>
                <Grid container justify="flex-start">
                    <Grid item xs={12} lg={5}>
                        <Typography variant="h2"> {this.props.id} </Typography>
                        <Typography variant="body1"> {this.props.insight} </Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = ({signal: {insight}}) => {
    return {insight}
}

export default connect(mapStateToProps, {fetchInsight})(InsightsViewer);