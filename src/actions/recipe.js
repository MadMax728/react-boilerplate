import * as types from '../constants/actionType';
import {recipeBook} from '../constants/recipeBook';

const getRecipeBookList = data => ({
    type: types.GET_RECIPE_LIST_SUCCEEDED,
    payload: data
});
const addShopCartItem = data => ({
    type: types.ADD_SHOPPING_CART,
    payload: data
});

export const getRecipeList = () => {
    return dispatch => {
        return dispatch(getRecipeBookList(recipeBook));
    };
};
export const addCartItem = (item) => {
    return dispatch => {
        return dispatch(addShopCartItem(item));
    };
};
