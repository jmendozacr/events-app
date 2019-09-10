import React              from 'react';
import Header             from './components/Header';
import Form               from './components/Form';
import CategoriesProvider from './context/CategoriesContext';

function App() {
    return (
        <CategoriesProvider>
            <Header title="React events with EventBrite and API"/>
            <div className="uk-container">
                <Form/>
            </div>
        </CategoriesProvider>
    );
}

export default App;