import React, {Component, PropTypes} from 'react';
import {Row, Col, Button} from 'react-materialize';
import SkillList from './SkillList';

export default class Skills extends Component {
    render() {
        let skills = Object.entries(this.props.skills).map(([name, skills]) => {
            return (
                <Col key={name}>
                    {name}
                    <SkillList skills={skills}/>
                </Col>
            )
        });

        return (
            <Row>
                {skills}
            </Row>
        );
    }
}
