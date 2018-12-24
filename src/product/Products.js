import React from 'react';
import Table from './Table';
import Form from './Form';
import Filters from './Filters';
import PRODUCTS from './data';

class Products extends React.Component {
    render() {
        return (
            <div>
                <Filters />
                <Table products={PRODUCTS} />
                <Form />
            </div>
        );
    }
}

export default Products;