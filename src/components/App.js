import React from 'react';
import BeerList from './BeerList';
import BeerDetail from './BeerDetail';
import './App.css';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column sixteen wide">
                    <h1 className="title">List of beers</h1>
                    <hr></hr>
                </div>
            </div>
            <div className="ui row bg">
                <div className="column eight wide">
                    <BeerList />
                </div>
                <div className="column eight wide">
                    <BeerDetail />
                </div>
            </div>
        </div>
    )
}

export default App;