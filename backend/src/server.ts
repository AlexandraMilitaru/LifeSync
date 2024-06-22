import path from "path";
import express from "express"
import cookieParser from "cookie-parser";
import { Application } from "express";

import authRouter from "./routers/auth-router";
import eventsRouter from "./routers/events-router";
import commentRouter from "./routers/comment-router";
import categoryRouter from "./routers/category-router";
import generatorRouter from "./routers/generator-router";
import statisticsRouter from "./routers/statistics-router";

import errorMiddleware from "./middlewares/error-middleware";

const app: Application = express();
const port = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json());

app.use('/static', express.static(path.join(__dirname, '..', 'public')));

app.use('/auth', authRouter);
app.use('/api/events', eventsRouter);
app.use('/api/comments', commentRouter);
app.use('/api/generate', generatorRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/statistics', statisticsRouter);

app.use(errorMiddleware);

app.listen(port, () => console.log(`Server is running on port: ${port}`));
