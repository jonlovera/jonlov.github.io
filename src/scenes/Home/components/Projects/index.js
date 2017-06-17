import React, {Component, PropTypes} from 'react';
import {Row} from 'react-materialize';
import ProjectItem from './components/ProjectItem';

export default class Projects extends Component {
    render() {
        let projects = this.props.projects.map((project, index) => {
            return (
                <ProjectItem project={project} key={index}/>
            )
        });

        return (
            <Row id="portfolio">
                {projects}
            </Row>
        )
    }
}
