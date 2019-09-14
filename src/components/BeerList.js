import React, { Component } from 'react';
import { connect } from 'react-redux';
import beers from '../apis/beers';
import BeerItem from './BeerItem';
import { selectBeer } from '../actions';

class BeerList extends Component {
    state = { beers: [] };

    componentDidMount() {
        this.beerList();
    }

    beerList = async() => {
        const response = await beers.get();
        this.setState({beers: response.data}); 
    }

    renderList = () => {  
        return this.state.beers.map((beer) => {
            return (
                <BeerItem beer={beer} key={beer.id} />
            )
        })
    }

    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
}

export default connect(null, {selectBeer})(BeerList);
