export class CreateUserDTO {
  readonly email: string;
  password: string;
  readonly role: number;
}
export class UpdateUserDTO {
  readonly email: string;
  password: string;
  readonly role: number;
}
