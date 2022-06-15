export interface ICreateUserDTO {
  email: string;
  password: string;
}

export interface IUpdateProfileDTO {
  name: string;
  surname: string;
  main_name: string;
  bio: string;
  area: string[];
  intereststags: string[];
  job: string[];
  id: string;
}

export interface ICreateUserTokensDTO {
  userId: string;
  refreshToken: string;
  expiresDate: Date;
}
