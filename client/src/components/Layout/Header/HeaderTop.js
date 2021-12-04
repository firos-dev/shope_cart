import { Fragment } from "react";

import classes from "./HeaderTop.module.css";

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import { Container, Row, Col } from "react-bootstrap";

const HeaderTop = () => {
  return (
    <Fragment>
      {/* background blue */}
      <header className={classes.header}>
        <Container>
          <Row>
            <Col xs={6} sm={4} md={2}>
              <FaPhoneAlt /> +221 33 66 22
            </Col>
            <Col xs={4}>
              <FaEnvelope /> support@elextra.io
            </Col>
          </Row>
        </Container>
      </header>
    </Fragment>
  );
};

export default HeaderTop;
