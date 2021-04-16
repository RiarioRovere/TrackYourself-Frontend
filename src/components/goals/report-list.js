import React, {Component} from 'react';
import {TextField, Typography} from "@material-ui/core";
import {connect} from "react-redux";
import {deleteReport, fetchReports, saveReport} from "../../actions/goal-actions";
import {Col, Row, Container, Button, Form} from "react-bootstrap";
import {BiTrash} from "react-icons/all";

class ReportList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }

    componentDidMount() {
        this.props.fetchReports(this.props.goalId);
    }

    handleChange = (e) => {
        const {value, id} = e.target
        this.setState({
            [id]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.saveReport(this.state, this.props.goalId);
        this.setState({content: ''})
    }

    handleRemove = async (id) => {
        await this.props.deleteReport(id);
        await this.props.fetchReports(this.props.goalId);
    }

    render() {
        const listItems = this.props.reports?.map(({content, id}) => {
            return (
                <li className={'list-group-item'}>
                    <Row>
                        <Col xs={10}>
                            <pre>
                                {content}
                            </pre>
                        </Col>
                        <Col>
                            <div align={'right'}>
                                {this.props.isMyGoal &&
                                <Button variant={'light'} name={content} onClick={() => this.handleRemove(id)}>
                                    <BiTrash className={'btn-outline-danger'}/>
                                </Button>
                                }
                            </div>
                        </Col>
                    </Row>
                </li>

            );
        });
        listItems.reverse()
        return (
            <Container fluid>
                <h4 variant="h4" align={"center"}>Reports</h4>
                <Row>
                    {this.props.isMyGoal &&
                    <Col xs={12}>
                        <Form>
                            <Form.Group>
                                <Form.Control as="textarea" id="content" name="content"
                                              value={this.state.content} onChange={this.handleChange} rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={this.handleSubmit}>save</Button>
                        </Form>
                    </Col>
                    }
                </Row>
                <ul style={{paddingTop: '30px'}} className={'list-group'}>
                    {listItems}
                </ul>
            </Container>
        )
    }
}

const mapStateToProps = ({goal: {reports}}) => {
    return {reports}
}

export default connect(mapStateToProps, {fetchReports, saveReport, deleteReport})(ReportList);