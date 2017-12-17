import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class ProductList extends Component {
  render() {
    return (
      <div className="ProductList">
        {
          // This "Product" item could be created as a component, but, in that case,
          // this ProductList container will be close to unnecessary, so, let's keep
          // this ProductList container with just an "for each" of `divs`
          this.props.products.map((product, i) => (
            <div className="product" key={i} onClick={() => this.props.onProductClick(product.id)}>
              <div className="picture" style={{ backgroundImage: `url(${product.picture})` }}></div>

              <div className="column">
                <div className="priceWrapper">
                  <div className="price">$ {product.price.amount}</div>
                  { product.free_shipping ? <div className="freeShipping"></div> : null }
                </div>

                <div className="title">{product.title}</div>
              </div>

              <div className="address">{product.address.state_name}</div>
            </div>
          ))
        }
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onProductClick: PropTypes.func.isRequired
};

export default ProductList;
