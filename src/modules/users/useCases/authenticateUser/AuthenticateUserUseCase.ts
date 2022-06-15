import { compare } from "bcryptjs";
import { addDays } from "date-fns";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import auth from "../../../../config/auth";
import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    email: string;
    permissions: string;
    profile: {
      name: string;
      surname: string;
    };
  };
  token: string;
  refresh_token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);
    const {
      secret_token,
      expires_in_token,
      secret_refresh_token,
      expires_in_refresh_token,
    } = auth;

    if (!user) {
      throw new AppError("Email or password incorrect!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or password incorrect!");
    }

    const token = sign({}, secret_token, {
      subject: user.id,
      expiresIn: expires_in_token,
    });

    const refresh_token = sign({ email }, secret_refresh_token, {
      subject: user.id,
      expiresIn: expires_in_refresh_token,
    });

    const refresh_token_expires_date = addDays(new Date(), 30);

    await this.usersRepository.createRefreshToken({
      userId: user.id,
      refreshToken: refresh_token,
      expiresDate: refresh_token_expires_date,
    });

    const tokenResposne: IResponse = {
      user: {
        email: user.email,
        permissions: user.permissions,
        profile: {
          name: user.profile.name,
          surname: user.profile.surname,
        },
      },
      token,
      refresh_token,
    };

    return tokenResposne;
  }
}

export { AuthenticateUserUseCase };
