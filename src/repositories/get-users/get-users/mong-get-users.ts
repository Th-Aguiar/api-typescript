import { IgetUsersRepository } from "../../../controllers/get-users/protocols";
import { User } from "../../../models/user";

export class MongoGetUsersRepository implements IgetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Thiago",
        lastName: "Poliponesio",
        email: "Email@email",
        password: "123456789",
      },
    ];
  }
}
