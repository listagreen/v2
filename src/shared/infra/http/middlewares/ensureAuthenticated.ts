import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import auth from "../../../../config/auth";
import { AuthError } from "../../../errors/AuthError";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AuthError("Token not present", "token.invalid", 401);
  }

  const [, token] = authHeader.split(" ");

  if (!token) {
    throw new AuthError("Token not present", "token.invalid", 401);
  }

  try {
    const { sub: user_id } = verify(token, auth.secret_token) as IPayload;

    req.user = {
      id: user_id,
    };

    return next();
  } catch (err) {
    throw new AuthError("Token invalid", "token.expired", 401);
  }
}
