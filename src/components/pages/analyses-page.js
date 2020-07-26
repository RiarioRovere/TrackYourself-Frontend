import React, {Component} from "react";
import Analyzer from "../analizer/analizer";
import SummaryViewer from "../summary/summary";

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