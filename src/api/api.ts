import { Data } from '../types';

export const BASE_URL = 'https://fakestoreapi.com/products';

export const getProducts = async (): Promise<Data[]> => {
 const response = await fetch(BASE_URL);
 return response.json();
}
