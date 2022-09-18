export class CreateProductDTO {
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly stock: number;
  readonly createdAt: Date;
}
export class UpdateProductDTO {
  readonly name: string;
  readonly description: string;
  readonly stock: number;
  readonly price: number;
}
