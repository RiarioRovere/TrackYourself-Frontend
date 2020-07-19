import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import WithApiService from "../../hoc/with-api-service";
import {Button, Grid, Typography} from "@material-ui/core";

class InsightsBrowser extends Component {
    render() {
        const listItems = this.props.apiService.getSignalNames().map(name => {
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

export default WithApiService(InsightsBrowser);