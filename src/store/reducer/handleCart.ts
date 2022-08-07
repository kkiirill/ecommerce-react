import { Data } from "../../types";

const cart: Data[] = [];

export const handleCart = (
  state = cart || null,
  action: { payload: any; type: any }
) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDCART":
      const productExist = state.find((item) => item.id === product.id);
      if (productExist) {
        return state.map((item) =>
          item.id === product.id ? { ...item, amt: item.amt + 1 } : item
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            amt: 1,
          },
        ];
      }

    case "REMOVECART":
      const productExistRemove = state.find((item) => item.id === product.id);
      if (productExistRemove?.amt === 1) {
        return state.filter((item) => item.id !== productExistRemove.id);
      } else {
        return state.map((item) =>
          item.id === product.id ? { ...item, amt: item.amt - 1 } : item
        );
      }

    case "REMOVEPRODUCT":
      const productRemove = state.find((item) => item.id === product.id);
      if (productRemove) {
        return state.filter((item) => item.id !== productRemove.id);
      }
      break;

    default:
      break;
  }

  return state;
};
