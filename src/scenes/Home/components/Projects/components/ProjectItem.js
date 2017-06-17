import React, {Component, PropTypes} from 'react';
import {Badge, Col} from 'react-materialize';
import Card from './Card.js';
import CardTitle from './CardTitle.js';

export default class ProjectItem extends Component {
    render() {
        let project = this.props.project,
            skills = (project.skills)
                ? project.skills.slice(0).reverse().map((skill, index) => <Badge key={index} className="blue">{skill}</Badge>)
                : null,
            title = (
                <h5 className="black-text">{project.title}{skills}</h5>
            ),
            header = (<CardTitle image={project.avatar}/>);

        return (
            <Col s={12} m={6} className="no-padding">
                <a href={project.url} target="_BLANK">
                    <Card className="no-margin" header={header} title={title}>
                        <p>
                            {project.description}
                        </p>
                    </Card>
                </a>
            </Col>
        )
    }
}
