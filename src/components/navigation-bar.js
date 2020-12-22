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
import AccountCircle from '@material-ui/icons/AccountCircle';


class NavigationBar extends Component {

    MenuButton = () => {
        const [ anchorEl, setAnchorEl ] = React.useState(null);
        const open = Boolean(anchorEl);

        const handleMenu = (event) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };

        return <div>
            <IconButton
                aria-label="menu of current user"
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
            </Menu>
        </div>
    };

    AccountButton = () => {
        const [ anchorEl, setAnchorEl ] = React.useState(null);
        let open = Boolean(anchorEl);

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
                aria-controls="account-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <AccountCircle />
            </IconButton>
            <Menu
                id="account-appbar"
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
                variant="menu"
            >
                {this.props.isLoggedIn &&
                    <MenuItem component={RouterLink} onClick={handleClose} to="/profile">Profile</MenuItem>
                }
                {this.props.isLoggedIn &&
                <MenuItem onClick={handleClick}>LogOut</MenuItem>
                }
                {this.props.isLoggedIn === false &&
                    <MenuItem component={RouterLink} onClick={handleClose} to="/registration">
                        Register
                    </MenuItem>
                }
                {this.props.isLoggedIn === false &&
                <MenuItem component={RouterLink} onClick={handleClose} to="/login">
                    Login
                </MenuItem>
                }
            </Menu>
        </div>
    };

    render() {
        return (
            <AppBar position="relative">
                <Toolbar>
                    { this.props.isLoggedIn &&
                    <this.MenuButton />
                    }
                    { this.props.isLoggedIn &&
                    <Search />
                    }
                    <this.AccountButton />
                </Toolbar>
            </AppBar>
        );
    }
}

const mapStateToProps = ({signal: {isLoggedIn}}) => {
    return {isLoggedIn}
}

export default connect(mapStateToProps, {logout})(NavigationBar);
