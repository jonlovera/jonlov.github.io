import React from 'react';
import Interactive from 'react-interactive';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import PageNotFound from './PageNotFound';
// import {Link} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import {Navbar, NavItem, Footer, Col, Row} from 'react-materialize'
import jsonData from '../json';
import Scrollchor from 'react-scrollchor';

export default function App() {
    let currentLocation = window.location.pathname,
        HomeSection = () => {
            if (currentLocation == '/') {
                return (
                    <section id="home" className="valign-wrapper full-h">
                        <Row className="no-margin full-w full-h">
                            <Col s={12} className='valign-wrapper full-h'>
                                <Row className="full-h m-b-n">
                                    <Col s={12} className="table full-h">
                                        <div className="angled-remove table-cell valign-middle">
                                            <div id="welcome">
                                                <h1 className="no-margin">{jsonData.about.name}</h1>
                                                <h3 className="monaco" style={{fontSize:"43px",margin:0}}>{jsonData.about.title}</h3>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </section>
                )
            } else
                return null;
            }
        ;

    return (
        <div>
            {(currentLocation == '/')
                ? <div id="push"></div>
                : null}
            {HomeSection()}
            <div id="main">
                <Navbar brand={jsonData.about.name} right className="row white p100">
                    <li>
                        <Scrollchor to="#about" animate={{offset: -3000, duration: 1300}}>Home</Scrollchor>
                        {/* <Link to="/">Home</Link> */}
                    </li>
                    <li>
                        <Scrollchor to="#about" animate={{offset: -124}}>About</Scrollchor>
                    </li>
                    <li>
                        <Scrollchor to="#projects" animate={{offset: -124}}>Projects</Scrollchor>
                    </li>
                    <li>
                        <Scrollchor to="#contact">Contact</Scrollchor>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/jonlovera/" target="_BLANK" className="black-text">
                            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href={"https://github.com/" +jsonData.about.github} className="black-text" target="_BLANK">
                            <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href={"https://gitlab.com/" +jsonData.about.gitlab} className="black-text" target="_BLANK">
                            <i className="fa fa-gitlab" aria-hidden="true"></i>
                        </a>
                    </li>
                </Navbar>

                <div id="content">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </div>

                <Footer className="small right-align blue" copyrights={<div>Made with <i className='fa fa-heart'></i> in ReactJS by {jsonData.about.name}</div>}
	></Footer>
            </div>
        </div>
    );
}
