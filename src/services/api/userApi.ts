import { ApiBase } from "./apiBase";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { SystemState } from "../../redux/store/system/type";
import { LoginCredentialsType } from "../../helpers/user";


export class UserApi extends ApiBase {

  public constructor () 
  {
    super();

    this.userLogin = this.userLogin.bind(this);
    // this.userRegister = this.userRegister.bind(this);
    // this.getAllUsers = this.getAllUsers.bind(this);
    // this.getById = this.getById.bind(this);
  }

  public async userLogin (credentials: LoginCredentialsType): Promise<SystemState> {
      return this.post<SystemState, LoginCredentialsType, AxiosResponse<SystemState>>("/auth/login", credentials).then(this.success)
  }

//   public userRegister (user: User): Promise<number> {
//       return this.post<number, User, AxiosResponse<number>>("https://www.domain.com/register", user)
//           .then(this.success)
//           .catch((error: AxiosError<Error>) => {
//               throw error;
//           });
//   }

//   public async getAllUsers (): Promise<User[]> {
//       try {
//           const res: AxiosResponse<User[]> = await this.get<User,AxiosResponse<User[]>>("https://www.domain.com/register");

//           return this.success(res);
//       } catch (error) {
//           throw error;
//       }
//   }

//   public getById (id: number): Promise<User> {
//       return this.get<User,AxiosResponse<User>>(`https://www.domain.com/users/${id}`)
//           .then(this.success)
//   }
// }

}

export const userApi = new UserApi();