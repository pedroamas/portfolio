import React from "react";
import { Row, Col, Image, NavLink, Table } from "react-bootstrap";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTranslation } from "react-i18next";
import BootstrapImg from '../images/btrapIcon.png'
import mongoIcon from '../images/mongoIcon.png'
import aboutme from '../images/aboutme.gif'
import responsive from '../images/responsive.gif'
import ReactIcon from '../images/React-icon.svg.png'
import javaIcon from '../images/javaIcon.png'
import scrumIcon from '../images/scrumIcon.png';
import angularIcon from '../images/angularIcon.svg';
import nodeIcon from '../images/nodeIcon.png';
import awsIcon from '../images/awsIcon.png';
import htmlIcon from '../images/htmlIcon.png';
import tsIcon from '../images/tsIcon.png';
import msIcon from '../images/msIcon.jpg';
import cssIcon from '../images/cssIcon.png';
import phpIcon from '../images/phpIcon.png';
import dockerIcon from '../images/dockerIcon.png';
import jsIcon from '../images/jsIcon.jpg';
import mysqlIcon from '../images/mysqlIcon.png';
function About(props) {
  const { t } = useTranslation();
  return (
    <>
      <div className="container  separe-margin">
        <div className="separe-margin">
          <h2 className="separe-margin">{t("About me")}</h2>

          <div
            style={{
              paddingTop: "10px",
            }}
          >
            <Row>
              <Col md={8} className="order-md-2">
                <p>
                  {t("about1")}
                  <br />
                  {t("about2")}
                </p>
              </Col>
              <Col md={4} className="order-md-1">
                <p>
                  <Image className="image" src={aboutme} fluid />
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={8} className="order-md-1">
                <p>
                  {t("about3")}
                  <br />
                  {t("about4")}
                </p>
              </Col>
              <Col md={4} className="order-md-2">
                <p>
                  <Image className="image" src={responsive} fluid />
                </p>
              </Col>
            </Row>
            <p>
              {t("about5")}{" "}
              <a
                href="https://www.linkedin.com/in/pedroamas/"
                target="_blank"
                style={{ textDecorationLine: "none" }}
              >
                LinkedIn!
                <LinkedInIcon color="primary" />
              </a>
            </p>
          </div>
          <Table>
            <thead>
              <tr>
                <th>Frontend Techs</th>
                <th>Backend Techs</th>
                <th>Other Knowledge</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Row>
                    <Col>React</Col>
                    <Col>
                      <Image className="icon" src={ ReactIcon}/>
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col>Java</Col>
                    <Col>
                      <Image className="icon" src={javaIcon} />
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col>Scrum Methodology</Col>
                    <Col>
                      <Image className="icon" src={scrumIcon} />
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td>
                  <Row>
                    <Col>Angular</Col>
                    <Col>
                      <Image className="icon" src={angularIcon} />
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col>Node js</Col>
                    <Col>
                      <Image className="icon" src={nodeIcon} />
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col>AWS</Col>
                    <Col>
                      <Image className="icon" src={awsIcon} />
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td>
                  <Row>
                    <Col>HTML</Col>
                    <Col>
                      <Image className="icon" src={htmlIcon} />
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col>Typescript</Col>
                    <Col>
                      <Image className="icon" src={tsIcon} />
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col>Microservices</Col>
                    <Col>
                      <Image className="icon" src={msIcon} />
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td>
                  <Row>
                    <Col>CSS</Col>
                    <Col>
                      <Image className="icon" src={cssIcon} />
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col>PHP</Col>
                    <Col>
                      <Image className="icon" src={phpIcon} />
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col>Docker</Col>
                    <Col>
                      <Image className="icon" src={dockerIcon} />
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td>
                  <Row>
                    <Col>Javascript</Col>
                    <Col>
                      <Image className="icon" src={jsIcon} />
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col>MySQL</Col>
                    <Col>
                      <Image className="icon" src={mysqlIcon}/>
                    </Col>
                  </Row>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <Row>
                    <Col>Bootstrap</Col>
                    <Col>
                      <Image className="icon" src={BootstrapImg} />
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col>MongoDB</Col>
                    <Col>
                      <Image className="icon" src={mongoIcon} />
                    </Col>
                  </Row>
                </td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default About;
