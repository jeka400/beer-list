import React from 'react';
import { connect } from 'react-redux';
import { selectBeer } from '../actions';
import './BeerItem.css';

const BeerItem = ({ beer, selectBeer }) => {
    return (
        <div className="item">
            <div className="right floated content">
                <button 
                    className="ui button primary select-button"
                    onClick={() => selectBeer(beer)}
                >
                    Select
                </button>
            </div>
            <div className="left">
                {beer.name}
            </div>
        </div>
    );
};

export default connect(null, {selectBeer})(BeerItem);