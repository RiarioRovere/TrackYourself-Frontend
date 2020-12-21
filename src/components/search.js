import React, {Component} from "react";
import {TextField} from "@material-ui/core";
import {connect} from "react-redux";
import {updateSearch} from "../actions/general-actions";


class Search extends Component {
    handleOnChange = (e) => {
        const {value} = e.target
        this.props.updateSearch(value);
    }

    render() {
        return (
            <TextField
                margin="dense"
                id="search-user"
                label="search-user"
                type="text"
                name="text"
                value={this.props.searchText}
                onChange={this.handleOnChange}
                // InputLabelProps={{
                //     shrink: true,
                // }}
                variant="outlined"
                color={"primary"}
            />
        )
    }
}

const mapStateToProps = ({general: {searchText}}) => {
    return {searchText}
}

export default connect(mapStateToProps, {updateSearch})(Search);
