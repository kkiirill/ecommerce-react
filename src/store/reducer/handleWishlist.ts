import { Data } from "../../types";

const wishlist: Data[] = [];

export const handleWishlist = (
  state = wishlist || null,
  action: { payload: any; type: any }
) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDWISHLIST":
      const productExist = state.find((item) => item.id === product.id);
      if (productExist) {
        return state.map((item) =>
          item.id === product.id ? { ...item } : item
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

    case "REMOVEWISHLIST":
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
