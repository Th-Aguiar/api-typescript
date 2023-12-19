import { IGetUsersController, IgetUsersRepository } from "./protocols";

export class GetUsersController implements IGetUsersController {
  getUsersRepository: IgetUsersRepository;

  constructor(getUsersRepository: IgetUsersRepository) {
    this.getUsersRepository = getUsersRepository;
  }

  async handle() {
    try {
      //Validar requisição
      const users = await this.getUsersRepository.getUsers();
      //Direcionar chamada para o repository
      return {
        statusCode: 200,
        body: users,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}
