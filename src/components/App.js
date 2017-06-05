import React from 'react';
import Interactive from 'react-interactive';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import PageNotFound from './PageNotFound';
import {HashLink as Link} from 'react-router-hash-link';
import {Navbar, NavItem, Footer, Col, Row} from 'react-materialize'
import jsonData from '../json';
import Scrollchor from 'react-scrollchor';


import {Track, TrackedDiv, TrackDocument} from 'react-track';
import {tween, combine} from 'react-imation';
import {
    getDocumentRect,
    getDocumentElement,
    calculateScrollY
} from 'react-track/tracking-formulas';

import {px} from 'react-imation/tween-value-factories';

export default function App() {
    let currentLocation = window.location.pathname,
        HomeSection = () => {
            if (currentLocation == '/') {
                $(document).ready(() => {
                    Typed.new('#typeName span', {
                        strings: [jsonData.about.name],
                        typeSpeed: 80,
                        //callback for every typed string
                        onStringTyped: function() {
                            $(".typed-cursor").hide();

                            Typed.new('#typeTitle span', {
                                strings: [jsonData.about.title],
                                typeSpeed: 80,
                                //callback for every typed string
                                onStringTyped: function() {
                                    $(".typed-cursor").hide();
                                }
                            });
                        }
                    });
                });

                return (
                    <section id="home" className="valign-wrapper full-h">
                        <Row className="no-margin full-w full-h">
                            <Col s={12} className='valign-wrapper full-h'>
                                <Row className="full-h m-b-n">
                                    <Col s={12} className="table full-h">
                                        <div className="angled-remove table-cell valign-middle">
                                            <div id="welcome">
                                                <h1 id="typeName" className="no-margin center-align">
                                                    <span></span>
                                                </h1>
                                                <h3 id="typeTitle" className="monaco center-align" style={{
                                                    fontSize: "40px",
                                                    margin: 0
                                                }}>
                                                    <span></span>
                                                </h3>
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

    let navbarBrand = <TrackDocument formulas={[
                getDocumentElement,
                getDocumentRect,
                calculateScrollY
            ]}>
                {(documentElement, documentRect, scrollY) => <div>
                    <Track component="span" formulas={[]}>
                        {(Span) => <Span style={tween(scrollY, [
                            [
                                255, {opacity: 0, top: px(-48)}
                            ],
                            [
                                287, {opacity: 1, top: px(0)}
                            ]
                        ])}>{jsonData.about.name}</Span>
    }</Track>

                </div>
    }</TrackDocument>

    return (
        <div>
            {(currentLocation == '/')
                ? <div id="push"></div>
                : null}
            {HomeSection()}

            <div id="main">
                <Navbar brand={navbarBrand} right className="row white p100">
                    <li>
                        <Scrollchor to="#about" animate={{
                            offset: -3000,
                            duration: 1300
                        }}>Home</Scrollchor>
                        {/* <Link to="/">Home</Link> */}
                    </li>
                    <li>
                        <Scrollchor to="#about" animate={{
                            offset: -124
                        }}>About</Scrollchor>
                    </li>
                    <li>
                        <Scrollchor to="#portfolio" animate={{
                            offset: -124
                        }}>Portfolio</Scrollchor>
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
                        <a href={"https://github.com/" + jsonData.about.github} className="black-text" target="_BLANK">
                            <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href={"https://gitlab.com/" + jsonData.about.gitlab} className="black-text" target="_BLANK">
                            <i className="fa fa-gitlab" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a href={"/build/"+jsonData.about.name+" Resume.pdf"} className="black-text" target="_BLANK">
                            <i className="fa fa-id-card" aria-hidden="true"></i>
                        </a>
                    </li>
                </Navbar>

                <div id="content">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </div>

                <Footer className="small center-align blue" copyrights={< div > Made with < i className = 'fa fa-heart' > </i> using ReactJS and compiled with Webpack. < a className = "white-text underline" href = "https://github.com/jonlov/jonlov.github.io" target = "_BLANK" > (View source code) < /a> < /div >}></Footer>
            </div>
        </div>
    );
}
