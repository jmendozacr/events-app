import React, { Component }     from 'react';
import { CategoriesConsumer }   from '../context/CategoriesContext';

export class Form extends Component {
    state = {
        name: '',
        category: ''
    }

    render() {
        return (
            <form>
                <fieldset className="uk-fieldset uk-margin">
                    <legend className="uk-legend uk-text-center">
                        Search your event by name or category.
                    </legend>
                </fieldset>

                <div className="uk-column-1-3@m uk-margin">
                    <div className="uk-margin" uk-margin="true">
                        <input
                            name="name"
                            className="uk-input"
                            type="text"
                            placeholder="Event name or city"
                        />
                    </div>
                    <div className="uk-margin" uk-margin="true">
                        <select
                            name="category"
                            className="uk-select">
                                <CategoriesConsumer>
                                    {
                                        (value) => {
                                            return (
                                                value.categories.map(category => (
                                                    <option
                                                        key={category.id}
                                                        value={category.name}
                                                        data-uk-form-select
                                                    >
                                                        {category.name}
                                                    </option>
                                                ))
                                            )
                                        }
                                    }
                                </CategoriesConsumer>
                        </select>
                    </div>
                    <div>
                        <input
                            type="submit"
                            className="uk-button uk-button-danger"
                            value="Search Events"
                        />
                    </div>
                </div>
            </form>
        )
    }
}

export default Form
