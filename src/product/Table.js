import React from 'react';
import './Table.css';

class Table extends React.Component {
    render() {
        let rows = Object.keys(this.props.products).map((product, id) => {
            return (
                <ProductRow product={this.props.products[product]} key={id} />
            );
        });

        return (
            <table>
                <thead>
                    <tr>
                        <ColumnHeader column="name" />
                        <ColumnHeader column="price" />
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

class ProductRow extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    <span className={this.props.product.stocked ? '' : 'out-of-stock'}>
                        {this.props.product.name}
                    </span>
                </td>
                <td>
                    {this.props.product.price}
                </td>
                <td>
                    <button>X</button>
                </td>
            </tr>
        );
    }
}

class ColumnHeader extends React.Component {
    render() {
        return (
            <th>
                {this.props.column}
                <button className='ColumnHeader-current'>&#x25B2;</button>
                <button>&#x25BC;</button>
            </th>
        );
    }
}

export default Table;