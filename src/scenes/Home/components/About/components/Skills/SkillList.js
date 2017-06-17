import React, {Component, PropTypes} from 'react';
import {Row, Col, Button} from 'react-materialize';

export default class SkillList extends Component {
    render() {
        return (
            <Row>
                {this.props.skills.map((skill, index) => {
                    return (
                        <Col key={index}>{skill}</Col>
                    )
                })}
            </Row>
        );
    }
}
