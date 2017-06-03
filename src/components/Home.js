import React from 'react';
import Interactive from 'react-interactive';
import {Link} from 'react-router-dom';
import {Card, CardTitle, Row, Col} from 'react-materialize';
import jsonData from '../json';

export default function Home() {
    let projects = jsonData.projects.map((project, index) =>
        <Col s={12} m={6} className="no-padding" key={index}>
            <a href={project.url} target="_BLANK">
                <Card className="no-margin" header={<CardTitle image={project.avatar} />} title={project.title}>
                    <p>
                        {project.description}
                    </p>
                </Card>
            </a>
        </Col>
    );

    return (
        <div>
            <div id="about">
                <Row className="p100 justify">
                        <div dangerouslySetInnerHTML={ {__html: jsonData.about.description} } />
                </Row>
            </div>
            <div id="projects">
                <Row id="projects">
                    {projects}
                </Row>
            </div>
            <div id="contact">
                <Row id="contact" className="p100">
                    <Col s={12} className="center-align">
                        <h3><b>Contact me</b></h3>
                        <hr/>
                        <br/>
                        <h5>
                            <a href="https://www.linkedin.com/in/jonlovera/" target="_BLANK" className="black-text">
                                <i className="fa fa-linkedin-square" aria-hidden="true" style={{fontSize: "28px"}}></i>
                                <span className="margin-left-18">{jsonData.about.name}</span>
                            </a>
                            <br/>
                            <br/>
                            <a href={"tel://"+jsonData.about.phone} className="black-text">
                                <i className="fa fa-phone-square" aria-hidden="true" style={{fontSize: "28px"}}></i>
                                <span className="margin-left-18">{jsonData.about.phoneBeautified}</span>
                            </a>
                            <br/>
                            <br/>
                            <a href={"mailto:"+jsonData.about.email} className="black-text">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                <span className="margin-left-18">{jsonData.about.email}</span>
                            </a>
                            <br/>
                            <br/>
                            <a href={"https://github.com/" +jsonData.about.github} className="black-text" target="_BLANK">
                                <i className="fa fa-github" aria-hidden="true" style={{fontSize: "28px"}}></i>
                                <span className="margin-left-18">Github</span>
                            </a>
                            <a href={"https://gitlab.com/" +jsonData.about.gitlab} className="black-text" target="_BLANK" style={{marginLeft: "48px"}}>
                                <i className="fa fa-gitlab" aria-hidden="true"></i>
                                <span className="margin-left-18">Gitlab</span>
                            </a>
                        </h5>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
