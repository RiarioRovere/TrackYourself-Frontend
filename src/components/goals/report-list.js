import React, {Component} from 'react';
import {Grid, Typography} from "@material-ui/core";
import {connect} from "react-redux";
import {fetchReports} from "../../actions";

class ReportList extends Component {
    componentDidMount() {
        this.props.fetchReports(this.props.goalId);
    }

    render() {
        console.log(this.props.reports)
        const listItems = this.props.reports?.map(({content}) => {
            return (
                <li>{content}</li>
            );
        });
        return (
            <div>
                <Grid container justify="flex-start">
                    <Grid item xs={12} lg={5}>
                        <Typography variant="h4">Reports</Typography>
                        <ul>
                            {listItems}
                        </ul>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = ({reports}) => {
    return {reports}
}

export default connect(mapStateToProps, {fetchReports})(ReportList);