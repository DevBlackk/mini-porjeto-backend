import { Router } from "express";
import { MusicController } from "../controller/music.controller.js";

const musicRoute = Router();
const music = new MusicController();

musicRoute.post("/music", music.createMusic);
musicRoute.get("/music", music.getAllMusics);
musicRoute.delete("/music/:id", music.deleteMusic);
musicRoute.put("/music/:id", music.updateMusic);


export default musicRoute;