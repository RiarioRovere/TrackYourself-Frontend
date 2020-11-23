import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchAccessToken} from "../../actions";
import {Button, FormControl, InputLabel, Input, FormGroup, Grid} from '@material-ui/core';


class LoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.fetchAccessToken(this.state.username, this.state.password)
    }


    handleOnChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <Grid container justify="center">
                <Grid item xs={5} lg={2}>
                    <FormGroup>
                        <FormControl>
                            <InputLabel htmlFor="login">username</InputLabel>
                            <Input id='login'
                                   name={'username'}
                                   type={'text'}
                                   onChange={this.handleOnChange}
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="password">password</InputLabel>
                            <Input id="password"
                                   name={'password'}
                                   type={'password'}
                                   onChange={this.handleOnChange}
                            />
                        </FormControl>
                        <Button color="primary" onClick={this.handleSubmit}>Log in</Button>
                    </FormGroup>
                </Grid>
            </Grid>
        )
    }
}

export default connect(null, {fetchAccessToken})(LoginForm);