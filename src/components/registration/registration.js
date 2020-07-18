import React, {Component} from "react";
import WithApiService from "../hoc/with-api-service";
import {Button, FormControl, FormGroup, Input, InputLabel, Grid} from "@material-ui/core";

class Registration extends Component {
    handleSubmit = (e) => {
        e.preventDefault();

        fetch(`${this.props.apiService.apiUrl}/user/register`, {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .catch(e => console.warn(e))
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
                        <Button color="primary" onClick={this.handleSubmit}>Sign Up</Button>
                    </FormGroup>
                </Grid>
            </Grid>
        )
    }
}

export default WithApiService(Registration);