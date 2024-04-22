import React from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Image,
  NavDropdown,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";

function Header(props) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    console.log(lng);
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng); // Guardar el idioma en el localStorage
  };
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand style={{ fontWeight: "bold" }}>PEDRO MAS</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="/portfolio/#/">{t("About me")}</Nav.Link>
              <Nav.Link href="/portfolio/#/todolist">
                {t("To-do list")}
              </Nav.Link>
              <Nav.Link href="/portfolio/#/chess">{t("Chess")}</Nav.Link>
              <Nav.Link href="/portfolio/#/minesweeper">
                {t("Minesweeper")}
              </Nav.Link>
              <Nav.Link href="/portfolio/#/snake">{t("Snake")}</Nav.Link>
            </Nav>
            <ButtonGroup>
              <ToggleButton
                id={`radio-1`}
                type="radio"
                variant={"outline-success"}
                name="radio"
                value={"en"}
                onChange={(e) => changeLanguage("en")}
              >
                <Image className="icon" src="images/united-states.png" />
              </ToggleButton>
              <ToggleButton
                id={`radio-2`}
                type="radio"
                variant={"outline-success"}
                name="radio"
                value={"en"}
                onChange={(e) => changeLanguage("es")}
              >
                <Image className="icon" src="images/spain.png" />
              </ToggleButton>
            </ButtonGroup>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

{
  /* <Navbar bg="dark" variant="dark" expand="lg">
<Navbar.Brand href="/">
  <img
    alt=""
    src="/logo192.png"
    width="30"
    height="30"
    className="d-inline-block align-top"
  />{" "}
</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav>
    <Nav.Link href="/#/">About me</Nav.Link>
    <Nav.Link href="/#/todolist">To-do list</Nav.Link>
    <Nav.Link href="/#/chess">Chess</Nav.Link>
    <Nav.Link href="/#/minesweeper">Minesweeper</Nav.Link>
    <Nav.Link href="/#/snake">Snake</Nav.Link>
    <button onClick={() => changeLanguage("en")}>English</button>
    <button onClick={() => changeLanguage("es")}>Español</button>
  </Nav>
  <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>
</Navbar.Collapse>
</Navbar> */
}
