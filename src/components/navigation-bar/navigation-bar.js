import React, {Component} from 'react';
import {MemoryRouter as Router} from 'react-router';
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import {AppBar, Button, Grid} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import {connect} from "react-redux";
import * as actions from "../../actions"
import WithApiService from "../hoc/with-api-service";

class NavigationBar extends Component {

    handleClick = event => {
        event.preventDefault();
        actions.logout();
    }

    render() {
        return (
            <AppBar position="relative">
                <Toolbar>
                    <Button component={RouterLink} to="/analyze">
                        Analyze
                    </Button>
                    <Button component={RouterLink} to="/signal">
                        Track it!
                    </Button>
                    {this.props.isLoggedIn === true
                        ? <Button onClick={this.handleClick}>LogOut</Button>
                        : null
                    }
                    {this.props.isLoggedIn === false
                        ? <Button component={RouterLink} to="/registration">
                            Register
                        </Button>
                        : null
                    }
                </Toolbar>

            </AppBar>
        );
    }
}

const mapStateToProps = ({isLoggedIn}) => {
    return {isLoggedIn}
}

export default connect(mapStateToProps, actions)(NavigationBar);
