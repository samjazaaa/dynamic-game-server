import express, { Application } from "express";
import MainRouter from "src/routes";

export const registerRoutes = (app: Application) => {
  app.use(express.json());

  app.use("/", MainRouter);
};
