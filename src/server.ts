import applicationRoutes from "./routes/application.routes";
import express from "express";
import app from "./app";
const PORT = 3000;

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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});