import { IGetUsersController, IgetUsersRepository } from "./protocols";

//Servidor chama esse controller "/users"
//Repository pattern - desenvolvido
export class GetUsersController implements IGetUsersController {
  getUsersRepository: IgetUsersRepository;

  constructor(getUsersRepository: IgetUsersRepository) {
    this.getUsersRepository = getUsersRepository;
  }

  async handle() {
    try {
      //Validar requisição
      //Pego os usuários
      const users = await this.getUsersRepository.getUsers();
      //Direcionar chamada para o repository

      //Retorno as informações do banco de dados
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
