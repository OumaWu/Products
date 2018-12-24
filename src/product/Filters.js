import React from 'react';

class Filters extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search product.." />&nbsp;
                <button>Search</button>
                <p>
                    <label>{/* clickint the text can toggle the checkbox */}
                        <input type="checkbox" />
                        &nbsp;
                        Only show products in stock
                    </label>
                </p>
            </form>
        );
    }
}

export default Filters;