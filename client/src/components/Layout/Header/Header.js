import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import HeaderTop from "./HeaderTop";
import classes from "./Header.module.css";
import logo from "./../../../assets/logo.svg";
import HeaderUserSection from "./HeaderUserSection";

import { Container, Row, Dropdown, Col } from "react-bootstrap";

/*
 * Page Header
 */
const Header = (props) => {
  return (
    <Fragment>
      {/* background blue  */}
      <HeaderTop />
      {/* background White */}
      <div className={`${classes["men-header"]} mt-5 mb-4`}>
        <Container>
          <Row>
            <div className="col-md-2 mr-auto">
              <img src={logo} alt="Logo" />
            </div>
            <div className="col-md-6">
              <input
                type="search"
                className={`form-control ${classes["input-shaded"]} br-12 shadow-none`}
                placeholder="Search..."
                aria-label="Search"
              ></input>
            </div>
            <div className="col-md-1">
            </div>
            <div className="col-md-1">
              <Row>
                <Col md={6}>
                <HeaderCartButton onClick={props.onShowCart} />
                </Col>
                <Col md={6}>
                <HeaderUserSection/>
                </Col>
              </Row>
            </div>
            <div className="col-md-2 d-flex flex-row-reverse">
              <button className={`${classes["cls-btn"]}`}>Classifieds</button>
            </div>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Header;
