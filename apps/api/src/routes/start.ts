import { Request, Response } from "express";

export const startRoute = (req: Request, res: Response) => {
  res.status(200).json({ message: "start placeholder" });
};
