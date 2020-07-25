import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button, Grid, Typography} from "@material-ui/core";
import {connect} from "react-redux";
import * as actions from "../../../actions";

class InsightsBrowser extends Component {
    componentDidMount() {
        this.props.fetchSignalsNames();
    }

    render() {
        const listItems = this.props.signalNames.map(name => {
            return (
                <Button  component={Link} to={`/insight/${name}`}>
                    {name}
                </Button>
            );
        });
        return (
            <div>
                <Grid container justify="flex-start">
                    <Grid item xs={12} lg={5}>
                        <Typography variant="h4">Insights</Typography>
                        {listItems}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = ({signalNames}) => {
    return {signalNames}
}

export default connect(mapStateToProps, actions)(InsightsBrowser);