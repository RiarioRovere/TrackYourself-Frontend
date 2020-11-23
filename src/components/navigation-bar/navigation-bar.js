import React, {Component} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {AppBar, Button} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import {connect} from "react-redux";
import {logout} from "../../actions"

class NavigationBar extends Component {

    handleClick = event => {
        event.preventDefault();
        this.props.logout();
    }

    render() {
        return (
            <AppBar position="relative">
                <Toolbar>
                    <Button component={RouterLink} to="/goals">
                        Goals
                    </Button>
                    <Button component={RouterLink} to="/analyze">
                        Analyze
                    </Button>
                    <Button component={RouterLink} to="/signal">
                        Track it!
                    </Button>
                    <Button component={RouterLink} to="/insights">
                        insights
                    </Button>
                    {this.props.isLoggedIn === true
                        ? < Button component={RouterLink} to="/profile">Profile</Button>
                        : null
                    }
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

export default connect(mapStateToProps, {logout})(NavigationBar);
