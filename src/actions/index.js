export const selectBeer = (beer) => { 
    return {  
        type: 'SELECTED_BEER',
        payload: beer
    };
};