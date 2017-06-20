import React, {Component, PropTypes} from 'react';
import {Row, Col, Button} from 'react-materialize';
import 'font-mfizz/dist/font-mfizz.css';

export default class SkillList extends Component {
    render() {
        return (
            <span>
                {this.props.skills.map((skill, index) => {
                    return (
                        <span key={index}>
                            {(typeof skill === 'object')
                                ? <span key={index}><i className={"icon-" + skill.icon}/> {skill.name}</span>
                                : <span key={index}><i className={"icon-" + skill.toLowerCase()}/> {skill}</span>
}
                            {(index < this.props.skills.length-1)
                                ? " | "
                                : null}
                        </span>
                    )
                })}
            </span>
        );
    }
}
