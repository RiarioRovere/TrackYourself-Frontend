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
import Grid from "@material-ui/core/Grid";
import {Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {LinkContainer} from "react-router-bootstrap";


class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: null,
            isAccountOpen: null
        }
    }

    handleLogout = (e) => {
        e.preventDefault();
        this.setState({isAccountOpen: null});
        this.props.logout();
    }

    MenuButton = () => {
        const {isMenuOpen} = this.state;
        const handleMenu = (event) => {
            this.setState({isMenuOpen: event.currentTarget});
        };

        const handleClose = () => {
            this.setState({isMenuOpen: null});
        };

        return <div>
            <IconButton
                aria-label="menu of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <Grid container direction="column">
                    <p style={{fontSize: 10, margin: 0, padding: 0}}>Menu</p>
                    <MenuIcon style={{margin: 0}}/>
                </Grid>
            </IconButton>
            <Menu id="menu-appbar" anchorEl={isMenuOpen} anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                keepMounted transformOrigin={{vertical: 'top', horizontal: 'right'}} open={Boolean(isMenuOpen)}
                onClose={handleClose} variant="selectedMenu"
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

    render() {
        return (
            <Navbar bg="light" expand="xs">
                <LinkContainer to={`/`}>
                    <Navbar.Brand>TY</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to={`/goals`}>
                            <p>Goals</p>
                        </LinkContainer>
                        <LinkContainer to={`/analyze`}>
                            <p>Stat</p>
                        </LinkContainer>
                        <LinkContainer to={`/signal`}>
                            <p>Track!</p>
                        </LinkContainer>
                        <LinkContainer to={`/insights`}>
                            <p>Insights</p>
                        </LinkContainer>
                        <LinkContainer to={`/profile`}>
                            <p>Profile</p>
                        </LinkContainer>
                        <Button onClick={this.handleLogout}>logout</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            // <AppBar position="relative">
            //     <Toolbar>
            //         { this.props.isLoggedIn &&
            //         <this.MenuButton />
            //         }
            //         { this.props.isLoggedIn &&
            //         <Search />
            //         }
            //         <this.AccountButton />
            //     </Toolbar>
            // </AppBar>
        );
    }
}

const mapStateToProps = ({signal: {isLoggedIn}}) => {
    return {isLoggedIn}
}

export default connect(mapStateToProps, {logout})(NavigationBar);
