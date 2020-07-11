import React, {Component} from "react";
import WithApiService from "../hoc/with-api-service";

class AnalysesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signals: null
        }
    }

    componentDidMount() {
        this.props.apiService.getSignals().then((signals) => {
                const v = signals.map(({name, value}) => {
                    return {name, value}
                });
                this.setState({
                    signals: v
                })
            }
        )
    }

    render() {

        return (
            <div>
                {JSON.stringify(this.state)}
            </div>
        )
    }
}

export default WithApiService(AnalysesPage);