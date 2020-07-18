import React, {Component} from "react";
import {connect} from "react-redux";
import WithApiService from "../hoc/with-api-service";
import * as actions from "../../actions";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class Analyzer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signals: []
        }
        this.colors = {
            sleep: "#8884d8",
            sport: "#a02c8c",
            nutrition: "#c10e0e",
            meditation: "#bd933b",
            "life qualiity": "#8cce41"
        };
    }

    componentDidMount() {
        this.props.fetchSignals(this.props.apiService);
    }

    render() {
        const data = this.props.signals.map(({name, value, date}) => {
            return {
                [date]: {
                    [name]: value
                }
            }
        })
        const reduced = {}
        data.forEach((entry) => {
            const date = Object.keys(entry)[0];
            reduced[date] = {
                ...reduced[date],
                ...entry[date]
            }
        })
        const keys = Object.keys(reduced).sort();
        const toDraw = []
        keys.forEach((key) => {
            const signals = reduced[key];
            toDraw.push({date: key, ...signals})
        })
        const signalNames = [...new Set(this.props.signals.map(({name}) => name))];
        return (
            <div>
                <LineChart
                    width={411}
                    height={300}
                    data={toDraw}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 60,
                    }}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="date" angle={-45} textAnchor="end"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend verticalAlign={'top'}/>
                    {
                        signalNames.map((name) => {
                            return <Line type="monotone" dataKey={name} stroke={this.colors[name]} activeDot={{r: 8}}/>
                        })
                    }

                </LineChart>
            </div>
        )
    }
}

const mapStateToProps = ({signals}) => {
    const mappedSignals = signals.map(({name, value, date}) => {
        return {
            name, value, date
        }
    });
    return {signals: mappedSignals}
}

export default connect(mapStateToProps, actions)(WithApiService(Analyzer));