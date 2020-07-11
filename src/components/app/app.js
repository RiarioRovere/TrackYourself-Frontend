import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import './app.css';
import WithApiService from "../hoc/with-api-service";
import SignalPage from "../pages/signal-page";
import AnalysesPage from "../pages/analyses-page";
import LoginPage from "../pages/login-page";
import HomePage from "../pages/home-page";
import RegistrationPage from "../pages/registration-page";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }
    componentDidMount() {
        this.props.apiService.isLoggedIn().then(r => this.setState({isLoggedIn: r}));
    }

    render() {
        // const redirect = this.state.isLoggedIn !== true && <Redirect to="/login" />;
        return (
            <Router>
                {/*{*/}
                {/*    redirect*/}
                {/*}*/}
                {/*{*/}
                {/*    JSON.stringify(this.state)*/}
                {/*}*/}
                <nav>
                    <ul>
                        <li>
                            <Link to="/signal">Track it!</Link>
                        </li>
                        <li>
                            <Link to="/analyze">Analyze</Link>
                        </li>
                        <li>
                            <Link to="/registration">Register</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    {/*{this.state.isLoggedIn !== true &&*/}
                    {/*    <Route path="/"> <LoginPage/> </Route>*/}
                    {/*}*/}
                    {/*<Route path="/login"> <LoginPage/> </Route>*/}
                    <Route path="/analyze">
                        <AnalysesPage />
                    </Route>
                    <Route path="/signal">
                        <SignalPage />
                    </Route>
                    <Route path="/registration">
                        <RegistrationPage />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default WithApiService(App);
