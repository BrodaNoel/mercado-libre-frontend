import React, { Component } from 'react';
import utils from 'utils';
import PropTypes from 'prop-types';
import './styles.css';

class ProductDetail extends Component {
  render() {
    const product = this.props.product;

    return (
      <div className="ProductDetail">
        <div className="breadcrumbs">
          <ul>
            { product.categories.map((category, i) => (<li key={i}>{category}</li>)) }
          </ul>
        </div>

        <div className="product">
          <div className="picture">
            <img src={product.picture} alt="product"/>
          </div>

          <div className="details">
            <div className="condition">
              {product.condition === 'new' ? 'Nuevo' : 'Usado' } - {product.sold_quantity} vendidos
            </div>

            <div className="title">{product.title}</div>

            <div>
              <div className="price">
                $ {utils.parseCurrency(product.price.amount)}
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
      </div>
    );
  }
}

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductDetail;
