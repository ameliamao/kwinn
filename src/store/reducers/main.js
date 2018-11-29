import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../main';

const initialState = {
    articles: [],
}



const getArticles = (state, action) => {
    return updateObject(state, {
        articles: action.newArticle
    })
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(actionTypes.GET_ARTICLES): return getArticles(state, action);
    }
}

export default reducer;
