import { Request, Response } from "express";

export const availableRoute = (req: Request, res: Response) => {
  res.status(200).json({ message: "available placeholder" });
};
