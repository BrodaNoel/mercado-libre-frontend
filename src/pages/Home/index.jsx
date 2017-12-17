import React, { Component } from 'react';
import Header from 'containers/Header';
import ProductList from 'containers/ProductList';
import ProductDetail from 'containers/ProductDetail';
import Loading from 'components/Loading';
import actions from 'actions';
import utils from 'utils';
import './styles.css';

class Home extends Component {
  state = {
    results: [],
    productSelected: null
  };

  componentDidMount() {
    if (this.props.match.params.id) {
      // We need to show the product detail page
      this.showProductDetail(this.props.match.params.id);

    } else {
      // We need to show the result page
      const queryString = utils.getQueryString(this.props.location);

      if (queryString.search) {
        this.doSearch(queryString.search);
      }
    }
  }

  /**
   * This function will be called by the Search Container when the user does search.
   * The function will change the loading status while it's looking for products
   * that match with the searched value.
   * @param  {String} value The search value (example: "iPod").
   */
  doSearch = (value) => {
    this.setState({
      results: [],
      productSelected: null,
      isLoading: true
    });

    this.props.history.push(`/items?search=${value}`);

    actions.products.search(value).then((products) => {
      this.setState({
        results: products,
        productSelected: null,
        isLoading: false
      });
    });
  }

  showProductDetail = (id) => {
    this.setState({
      results: [],
      productSelected: null,
      isLoading: true
    });

    this.props.history.push(`/items/${id}`);

    actions.products.getById(id).then((product) => {
      this.setState({
        productSelected: product,
        isLoading: false
      });
    });
  }

  render() {
    const { results, isLoading, productSelected } = this.state;

    return (
      <div className="Home">
        <Header onSearch={this.doSearch}></Header>

        { isLoading ? <Loading /> : null }

        {
          !productSelected && results.length > 0
            ? <ProductList products={results} onProductClick={this.showProductDetail} />
            : null
        }

        { productSelected ? <ProductDetail product={productSelected} /> : null }

      </div>
    );
  }
}

export default Home;
