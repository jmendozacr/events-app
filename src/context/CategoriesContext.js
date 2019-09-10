import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import axios                from 'axios';

const CategoriesContext = React.createContext();
export const CategoriesConsumer = CategoriesContext.Consumer;

export class CategoriesProvider extends Component {
    state = {
        categories: []
    }

    token = "XY57G4W5QDKNSZGYX6XB";

    componentDidMount(){
        this.getCategories();
    }

    getCategories = async () => {
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}`;

        let categories = await axios.get(url);

        this.setState({
            categories: categories.data.categories
        });
    }

    render() {
        return (
            <CategoriesContext.Provider
                value={{
                    categories: this.state.categories
                }}
            >
                {this.props.children}

            </CategoriesContext.Provider>
        );
    }
}

export default CategoriesProvider
