import { User } from "../../models/user";
import { HttpResponse } from "../protocols";

export interface IGetUsersController {
  async handle(): Promise<HttpResponse<User[]>>;
}

export interface IgetUsersRepository {
  async getUsers(): Promise<User[]>;
}
