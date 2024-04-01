import express from "express";
import { testDatabase } from "./config/db.config.js";
import userRoute from "./routes/user.route.js";
import musicRoute from "./routes/music.route.js";
import artistRoute from "./routes/artist.route.js";
import corsConfig from "./middlewares/cors.config.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(corsConfig)
app.use(userRoute);
app.use(musicRoute);
app.use(artistRoute);

app.listen(PORT, testDatabase(), () =>
    console.log("Server listening on port " + PORT)
);
