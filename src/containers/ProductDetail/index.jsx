import React, { Component } from 'react';
import utils from 'utils';
import PropTypes from 'prop-types';
import './styles.css';

class ProductDetail extends Component {
  render() {
    const product = this.props.product;

    return (
      <div className="ProductDetail">
        <div className="picture">
          <img src={product.picture} alt="product image"/>
        </div>

        <div className="details">
          <div className="condition">
            {product.condition === 'new' ? 'Nuevo' : 'Usado' } - {product.sold_quantity} vendidos
          </div>

          <div className="title">{product.title}</div>

          <div>
            <div className="price">
              $ {product.price.amount}
              <span className="decimals">{utils.zeroFill(product.price.decimals)}</span>
            </div>

            <i className="freeShipping"></i>
          </div>

          <button>Comprar</button>
        </div>

        <div className="description">
          <h3>Descripción del producto</h3>
          {product.description}
        </div>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductDetail;
