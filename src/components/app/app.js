import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import './app.css';
import WithApiService from "../hoc/with-api-service";
import SignalPage from "../pages/signal-page";
import AnalysesPage from "../pages/analyses-page";
import LoginPage from "../pages/login-page";
import HomePage from "../pages/home-page";
import RegistrationPage from "../pages/registration-page";
import NavigationBar from "../navigation-bar/navigation-bar";
import * as actions from "../../actions";
import {connect} from "react-redux";

class App extends Component {
    componentDidMount() {
        this.props.fecthLoginState(this.props.apiService);
    }

    render() {
        return (
            <Router>
                <NavigationBar />
                <Switch>
                    <Route path="/registration">
                        <RegistrationPage />
                    </Route>
                    {this.props.isLoggedIn !== true &&
                        <Route path="/"> <LoginPage/> </Route>
                    }
                    <Route path="/analyze">
                        <AnalysesPage />
                    </Route>
                    <Route path="/signal">
                        <SignalPage />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

const mapStateToProps = ({isLoggedIn}) => {
    return {isLoggedIn}
}

export default connect(mapStateToProps, actions)(WithApiService(App));
