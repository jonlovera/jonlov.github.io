import React, { Component, PropTypes } from "react";
import Scrollchor from "react-scrollchor";
import { Navbar } from "react-materialize";
import jsonData from "json";

import { Track, TrackDocument } from "react-track";
import { tween } from "react-imation";
import {
  getDocumentRect,
  getDocumentElement,
  calculateScrollY
} from "react-track/tracking-formulas";
import { px } from "react-imation/tween-value-factories";

export default class Nav extends Component {
  render() {
    let documentTracking = (
      <TrackDocument
        formulas={[getDocumentElement, getDocumentRect, calculateScrollY]}
      >
        {(documentElement, documentRect, scrollY) => (
          <div>
            <Track component="span" formulas={[]}>
              {Span => (
                <Span
                  style={tween(scrollY, [
                    [255, { opacity: 0, top: px(-48) }],
                    [287, { opacity: 1, top: px(0) }]
                  ])}
                >
                  {jsonData.about.name}
                </Span>
              )}
            </Track>
          </div>
        )}
      </TrackDocument>
    );

    return (
      <Navbar brand={documentTracking} right className="row white p100">
        <li>
          <Scrollchor
            to="#about"
            animate={{
              offset: -3000,
              duration: 1300
            }}
          >
            Home
          </Scrollchor>
        </li>
        <li>
          <Scrollchor
            to="#about"
            animate={{
              offset: -124
            }}
          >
            About
          </Scrollchor>
        </li>
        <li>
          <Scrollchor
            to="#portfolio"
            animate={{
              offset: -124
            }}
          >
            Portfolio
          </Scrollchor>
        </li>
        <li>
          <Scrollchor to="#contact">Contact</Scrollchor>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jonlovera/"
            target="_BLANK"
            className="black-text"
          >
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a
            href={"https://github.com/" + jsonData.about.github}
            className="black-text"
            target="_BLANK"
          >
            <i className="fa fa-github" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a
            href={"https://gitlab.com/" + jsonData.about.gitlab}
            className="black-text"
            target="_BLANK"
          >
            <i className="fa fa-gitlab" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a
            href={"/build/" + jsonData.about.name + " Resume.pdf"}
            className="black-text"
            target="_BLANK"
          >
            <i className="fa fa-id-card" aria-hidden="true" />
          </a>
        </li>
      </Navbar>
    );
  }
}
