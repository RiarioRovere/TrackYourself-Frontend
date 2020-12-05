import React, {Component} from "react";
import Analyzer from "../analizer";
import SummaryViewer from "../summary";

class AnalysesPage extends Component {
    render() {
        return (
            <div>
                <Analyzer/>
                <SummaryViewer/>
            </div>
        )
    }
}

export default AnalysesPage;