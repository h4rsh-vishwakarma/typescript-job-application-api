import express from "express";
import applicationRoutes from "./routes/application.routes";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "TypeScript Architecture Demo API is running"
  });
});

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    message: "TypeScript API is running"
  });
});

app.use("/applications", applicationRoutes);

export default app;