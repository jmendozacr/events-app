import React, { Component } from 'react';
import axios                from 'axios';

const EventsContext = React.createContext();
export const EventsConsumer = EventsContext.Consumer;

export class EventsProvider extends Component {

    token = "XY57G4W5QDKNSZGYX6XB";
    sortBy = "date";

    state = {
        events: []
    }

    getEvents = async (search) => {
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${search.name}&categories=${search.category}&sort_by=${this.sortBy}&token=${this.token}`;

        const events = await axios.get(url);

        this.setState({
            events: events.data.events
        });
    }

    render() {

        return (
            <EventsContext.Provider
            value={{
                events: this.state.events,
                getEvents: this.getEvents
            }}>
                {this.props.children}
            </EventsContext.Provider>
        )
    }
}

export default EventsProvider
