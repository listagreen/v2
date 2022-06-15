export class AuthError {
  public readonly message: string;

  public readonly errorCode: string;

  public readonly statusCode: number;

  constructor(message: string, errorCode: string, statusCode = 400) {
    this.message = message;
    this.errorCode = errorCode;
    this.statusCode = statusCode;
  }
}
