import React              from 'react';
import Header             from './components/Header';
import CategoriesProvider from './context/CategoriesContext';

function App() {
    return (
        <CategoriesProvider>
            <Header 
                title="React events with EventBrite and API"
            />
        </CategoriesProvider>
    );
}

export default App;