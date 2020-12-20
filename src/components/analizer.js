import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchSignals} from "../actions/signal-actions";
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis,} from 'recharts';
import {TextField} from "@material-ui/core";

class Analyzer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signals: [],
            from: "",
            to: ""
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
        this.props.fetchSignals();
    }

    handleOnChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
        console.log('state', this.state.from, this.state.to)
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
        let toDraw = []
        keys.forEach((key) => {
            const signals = reduced[key];
            toDraw.push({date: key, ...signals})
        })
        toDraw = toDraw.filter(({date}) => {
            return (this.state.from ? date >= this.state.from : true) &&
                (this.state.to ? date <= this.state.to : true)
        })
        let usedSignals = [];
        toDraw.forEach((x) => {
            usedSignals.push(...Object.keys(x))
        })
        usedSignals = new Set(usedSignals);
        const signalNames = [...new Set(this.props.signals.map(({name}) => name))].filter((signalName) => {
            return usedSignals.has(signalName);
        });
        return (
            <div>
                <LineChart
                    width={400} // Cant fix to full width wtf?(( https://recharts.org/en-US/
                    height={300}
                    data={toDraw}
                    margin={{
                        top: 5, right: 30, left: 0, bottom: 60,
                    }}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="date" angle={-45} textAnchor="end"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend verticalAlign={'top'}/>
                    {
                        signalNames.map((name) => {
                            return <Line type="monotone" key={name} dataKey={name} stroke={this.colors[name]} activeDot={{r: 8}}/>
                        })
                    }
                </LineChart>
                <TextField
                    margin={"dense"}
                    size={"small"}
                    id="from"
                    label="from"
                    type="date"
                    name="from"
                    onChange={this.handleOnChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    style = {{width: 170}}
                />
                    <TextField
                    margin={"dense"}
                    size={"small"}
                    id="to"
                    label="to"
                    type="date"
                    name="to"
                    onChange={this.handleOnChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    style = {{width: 170}}
                />
            </div>
        )
    }
}

const mapStateToProps = ({signal: {signals}}) => {
    const mappedSignals = signals.map(({name, value, date}) => {
        return {
            name, value, date
        }
    });
    return {signals: mappedSignals}
}

export default connect(mapStateToProps, {fetchSignals})(Analyzer);