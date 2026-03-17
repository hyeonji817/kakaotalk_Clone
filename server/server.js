import express from "express";
import cors from "cors";
import chatsRouter from "./routes/chats.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/chats", chatsRouter);

app.listen(5001, () => {
  console.log("server running on 5001");
});