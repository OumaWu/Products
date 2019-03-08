import React from 'react';
import './Table.css';

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.sortByKeyAndOrder = this.sortByKeyAndOrder.bind(this);
        this.state = {
            sort: {
                column: 'price',
                direction: 'desc'
            }
        };
    }

    sortByKeyAndOrder(objectA, objectB) {
        let isDesc = this.state.sort.direction === 'desc' ? -1 : 1;
        let [a, b] = [objectA[this.state.sort.column], objectB[this.state.sort.column]];
        if (this.state.sort.column === 'price') {
            ///[^\d\.\,]/g 去掉字符串中除数字和.之外的其它字符
            [a, b] = [a, b].map((value) => parseFloat(value.replace(/[^\d\.]/g, ''), 10));
        }
        if (a > b) {
            return 1 * isDesc;
        }
        if (a < b) {
            return -1 * isDesc;
        }
        return 0;
    }
    sortProducts() {
        let productsAsArray = Object.keys(this.props.products).map((pid) => this.props.products[pid]);
        return productsAsArray.sort(this.sortByKeyAndOrder);
    }

    render() {
        let rows = [];
        this.sortProducts().forEach((product) => {
            if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.showStock)) {
                return;
            }
            rows.push(<ProductRow product={product} key={product.id}></ProductRow>);
        });

        return (
            <table>
                <thead>
                    <tr>
                        <SortableColumnHeader
                            currentSort={this.state.sort}
                            column="name" />
                        <SortableColumnHeader
                            currentSort={this.state.sort}
                            column="price" />
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

class SortableColumnHeader extends React.Component {
    render() {
        let currentSort = this.props.currentSort.column === this.props.column ?
            this.props.currentSort.direction : false;

        return (
            <th>
                {this.props.column}
                <button className={currentSort === 'asc' ?
                    'SortableColumnHeader-current' : ''}>&#x25B2;</button>
                <button
                    className={currentSort === 'desc' ? 'SortableColumnHeader-current' : ''}
                >&#x25BC;</button>
            </th>
        );
    }
}

export default Table;