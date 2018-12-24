import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form>
                <h3>Enter a new product</h3>
                <p>
                    <label>
                        Name&emsp;<input type="text" name="name" />
                    </label>
                </p>
                <p>
                    <label>
                        Category&emsp;<input type="text" name="category" />
                    </label>
                </p>
                <p>
                    <label>
                        Price&emsp;<input type="text" name="price" />
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" name="stocked" />
                        &nbsp;In stock?
                    </label>&emsp;
                    <input type="submit" value="Save" />
                </p>
            </form>
        );
    }
}

export default Form;