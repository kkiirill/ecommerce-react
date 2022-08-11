export interface Resource {
  imageUrl: string;
}

export interface Data {
  handleCart: any;
  id: number;
  title: string;
  description: string;
  price: number;
  category?: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  ram?: number;
  amt?: any;
  total?: any;
}

export interface User {
  id: number;
  name: string;
  photo: string;
}
