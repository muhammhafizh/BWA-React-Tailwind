import React, { createContext, useContext, useReducer } from "react";

const Context = createContext();

const initialState = {
  cart: {},
};

export function useGlobalContext() {
  const [state, dispatch] = useContext(Context);

  if (!state || !dispatch) {
    throw new Error("UseGlobalContext must be used within a Provider");
  }

  return { state, dispatch };
}

function Reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: state.cart
          ? {
              ...state.cart,
              [action.item.id]: action.item,
            }
          : {
              [action.item.id]: action.item,
            },
      };
    default:
      break;
  }
}

export default function Provider(props) {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return <Context.Provider value={[state, dispatch]} {...props} />;
}