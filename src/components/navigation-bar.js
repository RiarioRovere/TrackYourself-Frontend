import React, {Component} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {AppBar} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import {connect} from "react-redux";
import {logout} from "../actions/signal-actions";
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Search from "./search";


class NavigationBar extends Component {

    MenuButton = () => {
        const [ anchorEl, setAnchorEl ] = React.useState(null);
        const open = Boolean(anchorEl);

        const handleClick = event => {
            setAnchorEl(null);
            event.preventDefault();
            this.props.logout();
        }

        const handleMenu = (event) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };

        return <div>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
                variant="selectedMenu"
            >
                <MenuItem component={RouterLink} onClick={handleClose} to="/goals">
                    Goals
                </MenuItem>
                <MenuItem component={RouterLink} onClick={handleClose} to="/analyze">
                    Analyze
                </MenuItem>
                <MenuItem component={RouterLink} onClick={handleClose} to="/signal">
                    Track it!
                </MenuItem>
                <MenuItem component={RouterLink} onClick={handleClose} to="/insights">
                    insights
                </MenuItem>
                {this.props.isLoggedIn === true
                    ? < MenuItem component={RouterLink} onClick={handleClose} to="/profile">Profile</MenuItem>
                    : null
                }
                {this.props.isLoggedIn === true
                    ? <MenuItem onClick={handleClick}>LogOut</MenuItem>
                    : null
                }
                {this.props.isLoggedIn === false
                    ? <MenuItem component={RouterLink} onClick={handleClose} to="/registration">
                        Register
                    </MenuItem>
                    : null
                }
            </Menu>
        </div>
    };

    render() {
        return (
            <AppBar position="relative">
                <Toolbar>
                    <this.MenuButton />
                    <Search />
                </Toolbar>
            </AppBar>
        );
    }
}

const mapStateToProps = ({signal: {isLoggedIn}}) => {
    return {isLoggedIn}
}

export default connect(mapStateToProps, {logout})(NavigationBar);
