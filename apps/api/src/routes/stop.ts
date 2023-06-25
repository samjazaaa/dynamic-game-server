import { Request, Response } from "express";

export const stopRoute = (req: Request, res: Response) => {
  res.status(200).json({ message: "stop placeholder" });
};
