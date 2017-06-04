import React from 'react';
import Interactive from 'react-interactive';
import {Link} from 'react-router-dom';
import {Card, CardTitle, Row, Col, Badge} from 'react-materialize';
import jsonData from '../json';

import {Track, TrackedDiv, TrackDocument} from 'react-track';
import {tween, combine} from 'react-imation';
import {
    topTop,
    topBottom,
    centerCenter,
    topCenter,
    bottomBottom,
    bottomTop,
    getDocumentRect,
    getDocumentElement,
    calculateScrollY
} from 'react-track/tracking-formulas';

import {
    rgb,
    rgba,
    scale,
    rotate,
    px,
    percent,
    translate3d
} from 'react-imation/tween-value-factories';

export default function Home() {
    let portfolio = jsonData.portfolio.map((project, index) => {
        let skills = (project.skills)
            ? project.skills.slice(0).reverse().map((skill, index) => <Badge key={index} className="blue">{skill}</Badge>)
            : null;

        return (
            <Col s={12} m={6} className="no-padding" key={index}>
                <a href={project.url} target="_BLANK">
                    <Card className="no-margin" header={< CardTitle image = {
                        project.avatar
                    } />} title={< span > {
                        project.title
                    }
                    {
                        skills
                    } < /span>}>
                        <p>
                            {project.description}
                        </p>
                    </Card>
                </a>
            </Col>
        );
    });

    return (
        <TrackDocument formulas={[
            getDocumentElement,
            getDocumentRect,
            calculateScrollY,
            topTop,
            topBottom,
            topCenter,
            centerCenter,
            bottomBottom,
            bottomTop
        ]}>
            {(documentElement, documentRect, scrollY, topTop, topBottom, topCenter, centerCenter, bottomBottom, bottomTop) => <div>
                <div id="about">
                        <Track component="div" className="row p100 p40s justify" formulas={[topBottom, centerCenter]}>
                            {(Span, posTopBottom, posCenterCenter) => <Span style={tween(scrollY, [
                                [
                                    posTopBottom, {
                                        opacity: 0
                                    }
                                ],
                                [
                                    posCenterCenter, {
                                        opacity: .8
                                    }
                                ]
                            ])}>
                                <div className="col s12 m9 l6 offset-l2" dangerouslySetInnerHTML={{
                                    __html: jsonData.about.description
                                }}></div>
                                <div className="col s12 m3 l2 right-align" style={{opacity:.94}}><img src="/build/img/profile.png" height="200px"/></div>
                            </Span>
}</Track>
                </div>
                <div id="portfolio">
                    <Row id="portfolio">
                        {portfolio}
                    </Row>
                </div>
                <div id="contact">
                    <Row id="contact" className="p100">
                        <Col s={12} className="center-align">
                            <h4>
                                <b>Contact me</b>
                            </h4>
                            <hr/>
                            <br/>
                            <div>
                                <a href={"tel://" + jsonData.about.phone} className="black-text">
                                    <i className="fa fa-phone-square" aria-hidden="true" style={{
                                        fontSize: "18px"
                                    }}></i>
                                    <span className="margin-left-18">{jsonData.about.phoneBeautified}</span>
                                </a>
                                <br/>
                                <br/>
                                <a href={"mailto:" + jsonData.about.email} className="black-text">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <span className="margin-left-18">{jsonData.about.email}</span>
                                </a>
                                <br/>
                                <br/>
                                <a href="https://www.linkedin.com/in/jonlovera/" target="_BLANK" className="black-text">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" style={{
                                        fontSize: "28px"
                                    }}></i>
                                </a>
                                <a href={"https://github.com/" + jsonData.about.github} className="black-text" target="_BLANK" style={{
                                    marginLeft: "48px"
                                }}>
                                    <i className="fa fa-github" aria-hidden="true" style={{
                                        fontSize: "28px"
                                    }}></i>
                                </a>
                                <a href={"https://gitlab.com/" + jsonData.about.gitlab} className="black-text" target="_BLANK" style={{
                                    marginLeft: "48px",
                                    fontSize: "26px"
                                }}>
                                    <i className="fa fa-gitlab" aria-hidden="true"></i>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
}</TrackDocument>
    );
}
