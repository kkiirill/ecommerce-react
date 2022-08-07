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