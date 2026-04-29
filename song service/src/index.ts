import express from "express";
import doetnv from "dotenv";
import songRoutes from "./route.js";
import redis from "redis";
import cors from "cors";

doetnv.config();

export const redisClient = redis.createClient({
  password: process.env.Redis_Password,
  socket: {
    host: process.env.HOST,
    port: 17322,
  },
});

redisClient
  .connect()
  .then(() => console.log("😎  Connected to Redis"))
  .catch(console.error);

const app = express();

app.use(cors());

app.use("/api/v1", songRoutes);

const port = process.env.PORT || 9000;

app.get("/",(req ,res)=>{
  res.json("hello Song service is running ✅")
  
})

app.listen(port, () => {
  console.log(`✅  Server is Running on http://localhost:${port}`);
});
