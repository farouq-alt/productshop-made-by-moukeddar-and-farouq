export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const exist = state.cart.find((p) => p.id === action.payload.id);
      if (exist) {
        return {
          ...state,
          cart: state.cart.map((p) =>
            p.id === action.payload.id ? { ...p, qte: p.qte + 1 } : p
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qte: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((p) => p.id !== action.payload),
      };

    case "MODIFY_QTE":
      return {
        ...state,
        cart: state.cart.map((p) =>
          p.id === action.payload.id ? { ...p, qte: action.payload.qte } : p
        ),
      };

    case "CLEAR_CART":
      return { ...state, cart: [] };

    case "GET_TOTAL_AMOUNT":
      const total = state.cart.reduce((sum, p) => sum + p.price * p.qte, 0);
      return { ...state, total };

    default:
      return state;
  }
};
