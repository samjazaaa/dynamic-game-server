import express, { Application } from "express";

export const registerAuth = (app: Application, apiKey: string) => {
  // require api key for any request
  app.use((req, res, next) => {
    const sentApiKey = req.get("API-Key");
    if (!sentApiKey || sentApiKey !== apiKey) {
      res.status(401).json({ error: "unauthorized" });
    } else {
      next();
    }
  });
};
