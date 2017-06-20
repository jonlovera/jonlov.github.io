import React, {Component, PropTypes} from 'react';
import {Row, Col, Button} from 'react-materialize';
import SkillList from './SkillList';

export default class Skills extends Component {
    render() {
        let skills = Object.entries(this.props.skills).map(([name, skills]) => {
            return (
                <div key={name} s={12}>
                    <b>{name+":"}</b>{" "}
                    <SkillList skills={skills}/>
                </div>
            )
        });

        return (
            <span>
                <h5><b>Skills</b></h5>
                <br />
                {skills}
            </span>
        );
    }
}
