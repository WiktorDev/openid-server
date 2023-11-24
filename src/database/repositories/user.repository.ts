import { User } from "../models/user.model";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>
  ) {}

  async findByEmail(email: string): Promise<User> {
    return this.repository.findOne({
      where: {
        email: email
      }
    })
  }
}