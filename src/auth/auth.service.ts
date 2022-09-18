import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.getByEmail(email);
    if (!user) {
      return null;
    }
    if (!(await argon2.verify(user.password, pass))) {
      return null;
    }
    return user;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id, date: new Date() };
    return await this.jwtService.signAsync(payload);
  }
}
