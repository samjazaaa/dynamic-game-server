import { Router } from "express";
import { statusRoute } from "./status";
import { availableRoute } from "./available";
import { startRoute } from "./start";
import { stopRoute } from "./stop";

const MainRouter = Router();

MainRouter.get("/status", statusRoute);
MainRouter.get("/available", availableRoute);
MainRouter.get("/start", startRoute);
MainRouter.get("/stop", stopRoute);

export default MainRouter;
