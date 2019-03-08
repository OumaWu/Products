import React from 'react';
import Table from './Table';
import Form from './Form';
import Filters from './Filters';
import PRODUCTS from './data';

class Products extends React.Component {

    constructor(props) {
        super(props);
        this.handleFilter = this.handleFilter.bind(this);
        this.state = {
            products: PRODUCTS,
            filterText: '',
            showStock: false,
        };
    }

    handleFilter(filterInput) {
        this.setState(filterInput);
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
                    showStock={this.state.showStock} />
                <Form />
            </div>
        );
    }
}

export default Products;