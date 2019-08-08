import * as types from "../constants/actionType";
import initialState from "../constants/initialState";

export const recipeReducer = (state = initialState.recipeBook, action) => {
  switch (action.type) {
    case types.ADD_SHOPPING_CART:
        return {
            ...state,
            cartList: [...state.cartList, action.payload]
        };
    case types.GET_RECIPE_LIST_SUCCEEDED:
        return {
            ...state,
            books: action.payload
        };
    default:
        return state;
  }
};

// export const recipeBooks = (state = [], action) => {
//     switch (action.type) {
//       case types.GET_RECIPE_LIST_SUCCEEDED:
//           return action.payload;
//       default:
//           return state;
//     }
//   };