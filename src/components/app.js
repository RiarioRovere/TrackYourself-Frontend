import 'bootstrap/dist/css/bootstrap.min.css';

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignalPage from "./pages/signal-page";
import AnalysesPage from "./pages/analyses-page";
import GoalsPage from "./pages/goals-page"
import LoginPage from "./pages/login-page";
import HomePage from "./pages/home-page";
import RegistrationPage from "./pages/registration-page";
import NavigationBar from "./navigation-bar";
import {fetchLoginState} from "../actions/signal-actions";
import {connect} from "react-redux";
import InsightPage from "./pages/insight-page";
import InsightsBrowserPage from "./pages/insights-browser-page";
import ProfilePage from "./pages/profile-page";
import SignalEditor from "./profile/signal-editor";
import GoalPage from "./pages/goal-page";
import GoalForm from "./goals/goal-form";
import SearchPage from "./pages/search-page";
import UserPage from "./pages/user-page";

class App extends Component {
    componentDidMount() {
        this.props.fetchLoginState();
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
                    {this.props.searchText &&
                        <Route path="/"> <SearchPage /> </Route>
                    }
                    <Route exact path="/goals">
                        <GoalsPage />
                    </Route>
                    <Route exact path="/analyze">
                        <AnalysesPage />
                    </Route>
                    <Route exact path="/signal">
                        <SignalPage />
                    </Route>
                    <Route path="/insight/:id" component={InsightPage} />
                    <Route path="/goal/:id" component={GoalPage} />
                    <Route path="/user/:username" component={UserPage} />
                    <Route path="/new-goal" component={GoalForm} />
                    <Route path="/insights" exact component={InsightsBrowserPage} />
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/profile" component={ProfilePage}/>
                    <Route exact path="/profile/signals" component={SignalEditor}/>
                </Switch>
            </Router>
        )
    }
}

const mapStateToProps = ({signal: {isLoggedIn}, general: {searchText}}) => {
    return {isLoggedIn, searchText}
}

export default connect(mapStateToProps, {fetchLoginState})(App);
