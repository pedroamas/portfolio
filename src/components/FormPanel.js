import React, { useState } from "react";
import {
  Alert,
  Form,
  Button,
  Card,
  Accordion,
  Row,
  Col,
} from "react-bootstrap";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useTranslation } from "react-i18next";
function FormPanel(props) {
  const [name, setName] = useState("");
  const [alerta, setAlerta] = useState(false);

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "") {
      setAlerta(true);
      setTimeout(() => setAlerta(false), 5000);
    } else {
      props.addTask(name);
      setName("");
      setAlerta(false);
    }
  }
  const { t } = useTranslation();
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              {t("What needs to be done?")} <AssignmentIcon />
            </Accordion.Header>
            <Accordion.Body>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Control
                          type="text"
                          placeholder={t("Enter task")}
                          autoComplete="off"
                          value={name}
                          onChange={handleChange}
                        />
                        <Alert variant="danger" show={alerta}>
                          {t("Task can't be empty")}
                        </Alert>
                      </Form.Group>
                    </Col>
                    <Col md={"auto"}>
                      <Button variant="success" type="submit">
                        {t("Add")}
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card>
    </Accordion>
  );
}

export default FormPanel;
