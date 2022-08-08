import { Data } from "../../types"

export const addCart = (product: Data) => {
  return {
    type: "ADDCART",
    payload: product
  }
}

export const removeCart = (product: any) => {
  return {
    type: "REMOVECART",
    payload: product
  }
}

export const removeProduct = (product: any) => {
  return {
    type: "REMOVEPRODUCT",
    payload: product
  }
}

export const addWishlist = (product: Data) => {
  return {
    type: "ADDWISHLIST",
    payload: product
  }
}

export const removeWishlist = (product: any) => {
  return {
    type: "REMOVEWISHLIST",
    payload: product
  }
}
