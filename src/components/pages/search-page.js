import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import {updateSearch} from "../../actions/general-actions";

class SearchPage extends Component {
    render() {
        const response = this.props.searchResponse.map((user) => {
            return (
                <li>
                    <Button component={Link} key={user.username} to={`/user/${user.username}`} onClick={ () => this.props.updateSearch('') }>
                        {user.username}
                    </Button>
                </li>
            )
        })
        return (
            <ul>
                {response}
            </ul>
        )
    }
}

const mapStateToProps = ({general: {searchResponse}}) => {
    return {searchResponse}
}

export default connect(mapStateToProps, {updateSearch})(SearchPage);