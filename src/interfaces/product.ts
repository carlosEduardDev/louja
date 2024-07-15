export interface ProductParams {
  id: string;
  title: string;
  price: number;
  original_price: number;
  condition: "new" | "not_specified" | "used";
  permalink: string;
  thumbnail: string;
  pictures: {
    url: string;
  }[];
  seller_address: {
    city: { name: string };
    state: { name: string };
    country: { name: string };
  };
  attributes: { name: string; value_name: string }[];
  warranty: string;
}
