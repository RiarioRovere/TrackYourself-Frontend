import React, {Component} from "react";
import WithApiService from "../hoc/with-api-service";

class AnalysesPage extends Component {
    render() {
        return (
            <div>
                Analyses Page
                {JSON.stringify(this.props.apiService.getSignals())}
            </div>
        )
    }
}

export default WithApiService(AnalysesPage);