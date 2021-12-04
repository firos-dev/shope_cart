import { useRef, useState, useEffect, useContext, Fragment } from "react";

import {Col, Row, Form} from 'react-bootstrap'
import classes from "./ProductItemForm.module.css";

import CartContext from './../../../store/cart-context';

const ProductSelectForm = (props) => {
  const quantityInputRef = useRef();

  const [stock, setStock] = useState()
  
    const cartCtx = useContext(CartContext);

  let { stockValue } = props

  useEffect(() => {
    loadStock()
  })

  const loadStock = () => {
    const item = cartCtx.items.filter(item => item.id === props.id)
    if (item.length) {
      setStock(props.stockValue - item[0].amount)
    } else {
      setStock(props.stockValue)
    }
  }


  // const selectHandler = () = {
    
  // }

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredQuantity = quantityInputRef.current.value;
    const enteredQuantityNumber = +enteredQuantity;
    

    if (
      enteredQuantity.trim().length === 0 ||
      enteredQuantityNumber < 1 ||
      enteredQuantityNumber > stock
    ) {
      return;
    }

    props.onAddToCart(enteredQuantityNumber);
  };

  return (
    <Fragment>
        <Form className={classes.form} onSubmit={submitHandler}>

          <Form.Control
            ref={quantityInputRef}
            size='sm'
            label="Quantity"
            type="number"
            min="1"
            max={stockValue}
            step="1"
            defaultValue="1"
            className='shadow-none w-50'
        />
        {stock ?
          <p className='text-muted'>Only {stock} Left</p>
          :
          <p className='text-warning'>Out of stock</p>
        }
          <button>+ Add to cart</button>
        </Form>
      </Fragment>
  );
};

export default ProductSelectForm;
