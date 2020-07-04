import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './app.css';
import WithApiService from "../hoc/with-api-service";
import SignalPage from "../pages/signal-page";
import AnalysesPage from "../pages/analyses-page";
import LoginPage from "../pages/login-page";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true
        }
    }
    componentDidMount() {
        // this.props.apiService.isLoggedIn().then(r => this.setState({isLoggedIn: r}))
    }

    render() {
        return (
            <Router>
                <Switch>
                    {this.state.isLoggedIn !== true &&
                        <Route path="/"> <LoginPage/> </Route>
                    }
                    <Route path="/analyses">
                        <AnalysesPage />
                    </Route>
                    <Route path="/">
                        <SignalPage />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default WithApiService(App);
