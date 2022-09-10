import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as argon2 from 'argon2';

import { IUser } from './interfaces/user.interface';
import { CreateUserDTO, UpdateUserDTO } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('Users') private readonly userModel: Model<IUser>) {}

  async getUsers(): Promise<IUser[]> {
    const users = await this.userModel.find();
    return users;
  }

  async getUser(userId: string): Promise<IUser> {
    const user = await this.userModel.findById(userId);
    return user;
  }

  async getByEmail(email: string): Promise<IUser> {
    const user = await this.userModel.findOne({
      email,
    });
    return user;
  }

  async createUser(createuserDTO: CreateUserDTO): Promise<IUser> {
    createuserDTO.password = await argon2.hash(createuserDTO.password);
    const user = await new this.userModel(createuserDTO);
    return await user.save();
  }

  async updateUser(
    userId: string,
    updateuserDTO: UpdateUserDTO,
  ): Promise<IUser> {
    updateuserDTO.password = await argon2.hash(updateuserDTO.password);
    return await this.userModel.findByIdAndUpdate(userId, updateuserDTO);
  }

  async deleteUser(userId: string): Promise<IUser> {
    return await this.userModel.findByIdAndDelete(userId);
  }
}
