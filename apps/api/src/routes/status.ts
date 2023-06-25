import { Request, Response } from "express";

export const statusRoute = (req: Request, res: Response) => {
  res.status(200).json({ message: "status placeholder" });
};
