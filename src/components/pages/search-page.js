import React, {Component} from "react";
import {connect} from "react-redux";
import {updateSearch} from "../../actions/general-actions";
import {Card, Container, Row} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

class SearchPage extends Component {
    render() {
        const response = this.props.searchResponse.map((user) => {
            return (
                <LinkContainer style={{ width: '10rem', margin: '10px' }}
                               to={`/user/${user.username}`}
                               onClick={ () => this.props.updateSearch('') }>
                    <Card >
                        <img src={process.env.PUBLIC_URL + '/anon.jpg'}
                                  className="rounded-circle" width="155" />
                        <Card.Body>
                            <Card.Title>{user.username}</Card.Title>
                        </Card.Body>
                    </Card>
                </LinkContainer>
            )
        })
        return (
            <Container>
                <Row>
                    {response}
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = ({general: {searchResponse}}) => {
    return {searchResponse}
}

export default connect(mapStateToProps, {updateSearch})(SearchPage);