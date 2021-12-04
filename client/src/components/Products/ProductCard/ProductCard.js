import React, {useContext} from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import image from './../../../assets/sample.png'
import { Rate } from 'antd'
import ProductSelectForm from '../ProductItemForm/ProductItemForm'

import CartContext from '../../../store/cart-context';

function ProductCard(props) {
    const { name, stock, id } = props
    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price
        });
    };
    return (
        <Col md={3} xs={6}>
            <Row>
            <Col md={5}>
                <img src={image} className='img-fluid' alt='product'/>
            </Col>
            <Col md={7}>
                    <h5>{name}</h5>
                    <p className='text-primary m-0'>{`$ ${props.price}`}</p>

                    <Rate defaultValue={3} count={4} className='mb-1' style={{ color: '#3187ED' }} />{'(12)'}
                    
                    <ProductSelectForm stockValue={ stock } id={id} onAddToCart={addToCartHandler}/>
            </Col>
            </Row>
        </Col>
    )
}

export default ProductCard
