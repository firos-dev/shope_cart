import { Fragment } from "react";


import { Container, Row } from 'react-bootstrap'
import banner from './../../../assets/banner.jpg'

import classes from './Banner.module.css'

/*
* Page Header Part
*/
const Banner = () => {
    return (
        <Fragment>
            <Container>
                <Row>
                    <section className={`${classes['main']}`}>
                        <img className={`${classes['image']} img-fluid`} src={banner} alt='banner' />
                        <div className={`${classes['caption']}`}>
                            <h3 className={`${classes['thin']}`}>From students to senior citizens</h3>
                            <h3 className={`${classes['thin']}`}>this web portal of</h3>
                            <h3 className={`${classes['bold']}`}>"Products and Classifieds”</h3>
                            <h3 className={`${classes['thin']}`}> provides it all</h3>
                        </div>
                    </section>
                </Row>
            </Container>

        </Fragment>
    );
};

export default Banner;
