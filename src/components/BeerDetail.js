import React from 'react';
import './BeerDetails.css';
import { connect } from 'react-redux';

const BeerDetail = ({beer}) => {
    if(!beer) {
        return null;
    }
    return (
        <div>
            <div>
                <h1>{ beer.name }</h1>
            </div>
            <div>
                <p>
                    <b>First brewed: </b>
                    { beer.first_brewed }
                </p>
            </div>
            <div className="about">
                <p >
                    <b>About beer: </b>
                    { beer.description }
                </p>
            </div>
            <div>
                <img 
                    src={ beer.image_url } 
                    alt={ beer.description } 
                    className="ui image beer-image" 
                />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {beer: state.selectedBeer}
}
export default connect(mapStateToProps)(BeerDetail);