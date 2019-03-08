import React from 'react';

class Filters extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const value = e.target[e.target.type === "checkbox" ? "checked" : "value"]
        const name = e.target.name;

        this.props.onFilter({
            [name]: value
        });

        e.preventDefault();
    }

    render() {
        return (
            <form>
                <input type="text"
                    value={this.props.filterText}
                    placeholder="Search product.."
                    name="filterText"
                    onChange={this.handleChange}
                />&nbsp;
                <button onClick={this.handleChange}>Search</button>
                <p>
                    <label>{/* clickint the text can toggle the checkbox */}
                        <input type="checkbox"
                            checked={this.props.showStock}
                            name="showStock"
                            onChange={this.handleChange}
                        />
                        &nbsp;
                        Only show products in stock
                    </label>
                </p>
            </form>
        );
    }
}

export default Filters;