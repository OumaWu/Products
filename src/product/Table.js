import React from 'react';
import './Table.css';

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.sortByKeyAndOrder = this.sortByKeyAndOrder.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleDestroy = this.handleDestroy.bind(this);
        this.state = {
            sort: {
                column: 'price',
                direction: 'desc'
            }
        };
    }

    handleDestroy(id) {
        this.props.onDestroy(id);
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

    handleSort(column, direction) {
        this.setState({
            sort: {
                column: column,
                direction: direction
            }
        });
    }

    render() {
        let rows = [];
        this.sortProducts().forEach((product) => {
            if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.showStock)) {
                return;
            }
            rows.push(<ProductRow product={product} key={product.id}
                onDestroy={this.handleDestroy}></ProductRow>);
        });

        return (
            <table>
                <thead>
                    <tr>
                        <SortableColumnHeader
                            onSort={this.handleSort}
                            currentSort={this.state.sort}
                            column="name" />
                        <SortableColumnHeader
                            onSort={this.handleSort}
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

    constructor(props) {
        super(props);
        this.destroy = this.destroy.bind(this);
    }

    destroy() {
        this.props.onDestroy(this.props.product.id);
    }

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
                    <button onClick={this.destroy}>X</button>
                </td>
            </tr>
        );
    }
}

class SortableColumnHeader extends React.Component {

    constructor(props) {
        super(props)
        this.handleSort = this.handleSort.bind(this);
    }

    handleSort(e) {
        this.props.onSort(this.props.column, e.target.name);
    }
    render() {
        let currentSort = this.props.currentSort.column === this.props.column ?
            this.props.currentSort.direction : false;

        return (
            <th>
                {this.props.column}
                <button
                    onClick={this.handleSort}
                    className={currentSort === 'asc' ?
                        'SortableColumnHeader-current' : ''}
                    name='asc'
                >&#x25B2;</button>
                <button
                    onClick={this.handleSort}
                    className={currentSort === 'desc' ?
                        'SortableColumnHeader-current' : ''}
                    name='desc'
                >&#x25BC;</button>
            </th>
        );
    }
}

export default Table;