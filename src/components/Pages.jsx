import React from 'react';
import styled from 'styled-components';
import SearchProduct from './SearchProduct.jsx';
const Product = function () {
  return (<Container>
    <h5>Find a Product</h5>
    <div>Start typing a product name to find detailed support information for that product.</div>
    <SearchProduct/>
  </Container>)

}

export default Product;

const Container = styled.div`
  margin:40px;
`;