import React, {Component} from 'react';
import {withRouter} from "react-router";
import WithApiService from "../../hoc/with-api-service";
import {Grid, Typography} from "@material-ui/core";

class Viewer extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            content: ''
        }
    }
    componentDidMount() {
        this.setState({
            id: this.props.id,
            content: this.props.apiService.getInsight(this.props.id)
        })
    }

    render() {
        return (
            <div>
                <Grid container justify="flex-start">
                    <Grid item xs={12} lg={5}>
                        <Typography variant="h2"> {this.state.id} </Typography>
                        <Typography variant="body1"> {this.state.content} </Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default WithApiService(withRouter(Viewer));