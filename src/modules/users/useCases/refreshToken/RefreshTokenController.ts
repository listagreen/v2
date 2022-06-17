import { Request, Response } from "express";
import { container } from "tsyringe";

import { RefreshTokenUseCase } from "./RefreshTokenUseCase";

export class RefreshTokenController {
  async handle(req: Request, res: Response): Promise<Response> {
    const refresh_token =
      req.body.refresh_token ||
      req.headers["x-access-refresh_token"] ||
      req.query.refresh_token;

    const refreshTokenUseCase = container.resolve(RefreshTokenUseCase);

    const token = await refreshTokenUseCase.execute(refresh_token);

    return res.json(token);
  }
}
