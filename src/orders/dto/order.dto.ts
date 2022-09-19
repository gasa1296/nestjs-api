export class CreateOrderDTO {
  user: string;
  products: [{ product: string; quantity: number }];
}
