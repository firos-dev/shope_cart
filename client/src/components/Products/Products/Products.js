import React, { Fragment, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Card from "../../UI/Card";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState();
  useEffect(() => {
    loadProducts();
  },[]);

  /**
   * Loading Products
   * @returns
   */
  const loadProducts = () => {
    console.log("axios");

    return axios.post("/api/get/products")
      .then(function (response) {
      setProducts(response.data)
    }).catch((e) => {
      console.log(e);
    })
    
  };


  return (
    <div>
      <Fragment>
        <Container className="mt-5">
          <h3 className="mb-4">Best Deals</h3>
          <Row>
            {products &&
              products.map((item) => {
                return (
                  <ProductCard
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    stock={item.stock}
                    price={item.price}
                  />
                );
              })}
          </Row>
        </Container>
      </Fragment>
    </div>
  );
}

export default Products;
