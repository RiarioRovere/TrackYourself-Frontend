import React, {Component} from "react";
import {connect} from 'react-redux'
import {fetchSignalNames, addSignalName, deleteSignalName} from '../../actions'
import {Grid} from "@material-ui/core"
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";

class SignalEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newSignal: ''
        }
    }
    componentDidMount() {
        this.props.fetchSignalNames();
    }

    handleRemove = (name) => {
        this.props.deleteSignalName(name);
    }

    handleChange = (e) => {
        const {value} = e.target
        this.setState({
            newSignal: value
        })
    }

    handleAdd = () => {
        this.props.addSignalName(this.state.newSignal);
        this.setState({
            newSignal: ''
        })
    }

    render() {
        const signalNamesMapped = this.props.signalNames.map((name) => {
            return (
                <Grid container key={name} alignItems="center">
                    {/* TODO: Change layout to be cool */}
                    <Grid item xs={4}>
                        <p>{name}</p>
                    </Grid>
                    <IconButton name={name} onClick={() => this.handleRemove(name)}>
                        <HighlightOffIcon/>
                    </IconButton>
                </Grid>
            )
        })
        return (
            <Grid container direction="column">
                {signalNamesMapped}
                <Grid container alignItems="center">
                    <Input onChange={this.handleChange} value={this.state.newSignal}/>
                    <IconButton onClick={this.handleAdd}>
                        <AddCircleOutlineIcon/>
                    </IconButton>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = ({signalNames}) => {
    return {signalNames}
}

export default connect(mapStateToProps, {addSignalName, fetchSignalNames, deleteSignalName})(SignalEditor);