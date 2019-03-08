import React from 'react';

const RESET_VALUES = { id: '', category: '', price: '', stocked: false, name: '' };

class Form extends React.Component {


    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            product: Object.assign({}, RESET_VALUES),
            errors: {}
        };
    }

    handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState((prevState) => {
            prevState.product[name] = value;
            return { product: prevState.product };
        });
    }

    handleSave(e) {
        this.props.onSave(this.state.product);
        // reset the form values to blank after submitting:
        this.setState({
            product: Object.assign({}, RESET_VALUES)
        });
        // prevent the form submit event from triggering an HTTP Post:
        e.preventDefault();
    }

    render() {
        return (
            <form>
                <h3>Enter a new product</h3>
                <p>
                    <label>
                        Name&emsp;<input type="text" name="name"
                            onChange={this.handleChange} value={this.state.product.name} />
                    </label>
                </p>
                <p>
                    <label>
                        Category&emsp;<input type="text" name="category"
                            onChange={this.handleChange} value={this.state.product.category} />
                    </label>
                </p>
                <p>
                    <label>
                        Price&emsp;<input type="text" name="price"
                            onChange={this.handleChange} value={this.state.product.price} />
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" name="stocked"
                            onChange={this.handleChange} value={this.state.product.stocked} />
                        &nbsp;In stock?
                    </label>&emsp;
                    <input type="submit" value="Save"
                        onClick={this.handleSave} />
                </p>
            </form>
        );
    }
}

export default Form;