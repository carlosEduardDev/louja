export interface ListProductsParams {
  results: {
    id: string;
    title: string;
    thumbnail: string;
    price: number;
  }[];
}