import React, {Component, PropTypes} from 'react';
import {Row, Col, Button} from 'react-materialize';

export default class Contact extends Component {
    render() {
        let info = this.props.info;
        return (
            <Row id="contact" className="p100 p40s">
                <Col s={12} className="center-align">
                    <h4>
                        <b>Contact me</b>
                    </h4>
                    <hr/>
                    <br/>
                    <div>
                        <a href={"tel://" + info.phone} className="black-text">
                            <i className="fa fa-phone-square" aria-hidden="true" style={{
                                fontSize: "18px"
                            }}></i>
                            <span className="margin-left-18">{info.phoneBeautified}</span>
                        </a>
                        <br/>
                        <br/>
                        <a href={"mailto:" + info.email} className="black-text">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <span className="margin-left-18">{info.email}</span>
                        </a>
                        <br/>
                        <br/>
                        <a href="https://www.linkedin.com/in/jonlovera/" target="_BLANK" className="black-text">
                            <i className="fa fa-linkedin-square" aria-hidden="true" style={{
                                fontSize: "28px"
                            }}></i>
                        </a>
                        <a href={"https://github.com/" + info.github} className="black-text" target="_BLANK" style={{
                            marginLeft: "48px"
                        }}>
                            <i className="fa fa-github" aria-hidden="true" style={{
                                fontSize: "28px"
                            }}></i>
                        </a>
                        <a href={"https://gitlab.com/" + info.gitlab} className="black-text" target="_BLANK" style={{
                            marginLeft: "48px",
                            fontSize: "26px"
                        }}>
                            <i className="fa fa-gitlab" aria-hidden="true"></i>
                        </a>
                        <br/>
                        <br/>

                        <a href={"/build/" + info.name + " Resume.pdf"} className="black-text" target="_BLANK">
                            <Button className="blue" large>View resume</Button>
                        </a>
                    </div>
                </Col>
            </Row>
        )
    }
}
