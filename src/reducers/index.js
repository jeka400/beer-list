import { combineReducers } from 'redux';

const selectedBeerReducer = (selectedBeer = null, action) => {
    if(action.type === 'SELECTED_BEER') {
        return action.payload;
    }
    return selectedBeer;
}; 

export default combineReducers({ 
    selectedBeer: selectedBeerReducer
});