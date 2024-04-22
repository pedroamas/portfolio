import React from "react";
import { Row, Col, Image, NavLink, Table } from "react-bootstrap";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTranslation } from "react-i18next";

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
                  <Image className="image" src="images/aboutme.gif" fluid />
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
                  <Image className="image" src="images/responsive.gif" fluid />
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
                <th>Other Knowledges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Row>
                    <Col>React</Col>
                    <Col>
                      <Image className="icon" src="images/React-icon.svg.png" />
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col>Java</Col>
                    <Col>
                      <Image className="icon" src="images/javaIcon.png" />
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col>Scrum Methodology</Col>
                    <Col>
                      <Image className="icon" src="images/scrumIcon.png" />
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td>
                  <Row>
                    <Col>Angular</Col>
                    <Col>
                      <Image className="icon" src="images/angularIcon.svg" />
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col>Node js</Col>
                    <Col>
                      <Image className="icon" src="images/nodeIcon.png" />
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col>AWS</Col>
                    <Col>
                      <Image className="icon" src="images/awsIcon.png" />
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td>
                  <Row>
                    <Col>HTML</Col>
                    <Col>
                      <Image className="icon" src="images/htmlIcon.png" />
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col>Typescript</Col>
                    <Col>
                      <Image className="icon" src="images/tsIcon.png" />
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col>Microservices</Col>
                    <Col>
                      <Image className="icon" src="images/msIcon.jpg" />
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td>
                  <Row>
                    <Col>CSS</Col>
                    <Col>
                      <Image className="icon" src="images/cssIcon.png" />
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col>PHP</Col>
                    <Col>
                      <Image className="icon" src="images/phpIcon.png" />
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col>Docker</Col>
                    <Col>
                      <Image className="icon" src="images/dockerIcon.png" />
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <td>
                  <Row>
                    <Col>Javascript</Col>
                    <Col>
                      <Image className="icon" src="images/jsIcon.jpg" />
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col>MySQL</Col>
                    <Col>
                      <Image className="icon" src="images/mysqlIcon.png" />
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
                      <Image className="icon" src="images/btrapIcon.png" />
                    </Col>
                  </Row>
                </td>
                <td>
                  <Row>
                    <Col>MongoDB</Col>
                    <Col>
                      <Image className="icon" src="images/mongoIcon.png" />
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

/*
import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";

function About(props) {
  return (
    <>
      <div className="container  separe-margin">
        <div className="separe-margin">
          <h2 className="separe-margin">About me</h2>

          <div
            style={{
              paddingTop: "10px",
            }}
          >
            <p>
              Hello! I'm Pedro Mas, a passionate fullstack developer with seven
              years of experience in the technology industry. I graduated in
              Computer Science with a strong belief that innovation and
              creativity are the driving forces of progress in our field.
              <br />
              Throughout my professional career, I've had the privilege of
              working on a variety of challenging projects that have allowed me
              to develop my technical skills and my ability to efficiently solve
              problems. My focus is on creating robust and scalable software
              solutions that meet the needs of end-users.
              <br />
              My experience spans from developing web and mobile applications to
              implementing complex database systems and optimizing performance.
              Additionally, I am passionate about staying up-to-date with the
              latest trends and emerging technologies in the world of software
              development.
              <br />
              As a committed professional, I strive to effectively collaborate
              with multidisciplinary teams, communicating ideas clearly and
              contributing to the collective success of the project. I firmly
              believe in continuous learning and constant improvement, always
              seeking new opportunities for personal and professional growth.
              <br />I am excited about future opportunities that allow me to
              continue growing and contributing to the exciting world of
              technology. If you're interested in learning more about my work or
              exploring potential collaborations, feel free to get in touch!
            </p>
          </div>
          <div
            style={{
              textAlign: "center",
              paddingTop: "10px",
            }}
          >
            <Image className="image" src="images/aboutme.gif" fluid />
          </div>

          <Row className="centered">
            <Col xs={6} md={6}>
              <Image className="image" src="images/mongo.png" fluid />
            </Col>

            <Col xs={6} md={6}>
              <Image className="image" src="images/node.png" fluid />
            </Col>
          </Row>
          <Row className="centered">
            <Col xs={6} md={6}>
              <Image className="image" src="images/bootstrap.png" fluid />
            </Col>
            <Col xs={6} md={6}>
              <Image className="image" src="images/react.jpg" fluid />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default About;

*/
