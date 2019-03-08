import React from 'react';
import Table from './Table';
import Form from './Form';
import Filters from './Filters';
import PRODUCTS from './data';

class Products extends React.Component {

    constructor(props) {
        super(props);
        this.handleFilter = this.handleFilter.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
        this.handleDestroy = this.handleDestroy.bind(this);
        this.state = {
            products: PRODUCTS,
            filterText: '',
            showStock: false,
        };
    }

    handleDestroy(productId) {
        this.setState((prevState) => {
            let products = prevState.products;
            delete products[productId];
            return { products };
        });
    }

    handleFilter(filterInput) {
        this.setState(filterInput);
    }

    saveProduct(product) {
        product.id = new Date().getTime();
        this.setState((prevState) => {
            let products = prevState.products;
            products[product.id] = product;
            return { products };
        });
    }

    render() {
        return (
            <div>
                <Filters
                    filterText={this.state.filterText}
                    showStock={this.state.showStock}
                    onFilter={this.handleFilter}
                />
                <Table
                    products={this.state.products}
                    filterText={this.state.filterText}
                    showStock={this.state.showStock}
                    onDestroy={this.handleDestroy}
                />
                <Form onSave={this.saveProduct} />
            </div>
        );
    }
}

export default Products;