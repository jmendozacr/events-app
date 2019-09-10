import React              from 'react';
import Header             from './components/Header';
import Form               from './components/Form';
import EventList          from './components/EventList';
import CategoriesProvider from './context/CategoriesContext';
import EventsProvider     from './context/EventsContext';

function App() {
    return (
        <>
            <Header title="React events with EventBrite and API"/>
            <div className="uk-container">
                <EventsProvider>
                    <CategoriesProvider>
                        <Form/>
                        <EventList/>
                    </CategoriesProvider>
                </EventsProvider>
            </div>
        </>
    );
}

export default App;