import React, {Component} from 'react';
import WithApiService from "../hoc/with-api-service";
import InsightsBrowser from "../insights/browser/insights-browser";

class InsightsBrowserPage extends Component {
    render() {
        return (
            <InsightsBrowser/>
        )
    }
}

export default WithApiService(InsightsBrowserPage);