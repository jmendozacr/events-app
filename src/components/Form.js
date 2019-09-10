import React, { Component }     from 'react';
import { CategoriesConsumer }   from '../context/CategoriesContext';
import { EventsConsumer }       from '../context/EventsContext';

export class Form extends Component {
    state = {
        name: '',
        category: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <EventsConsumer>
                {(value) => {
                    return(
                        <form 
                        onSubmit={(e) => {
                            e.preventDefault();

                            value.getEvents(this.state);
                        }}>
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
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="uk-margin" uk-margin="true">
                                    <select
                                        name="category"
                                        onChange={this.handleChange}
                                        className="uk-select">
                                            <option value="">--Select Category--</option>
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
            </EventsConsumer>
        )
    }
}

export default Form
