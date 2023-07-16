import { Request, Response } from "express";
import { availableServers } from "src/startup/available-servers";

export const availableRoute = (req: Request, res: Response) => {
  /*
  const responseData = availableServers.map((server) => {
    name: server.name;
  });
  */
  res.status(200).json(availableServers);
};
