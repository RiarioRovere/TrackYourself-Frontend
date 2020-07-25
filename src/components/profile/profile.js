import React, {Component} from "react";
import {Link as RouterLink} from "react-router-dom";
import {Button} from "@material-ui/core";

class Profile extends Component {

    render() {
        return (
            <Button component={RouterLink} to="/profile/signals">
                Signals
            </Button>
        )
    }
}

export default Profile;