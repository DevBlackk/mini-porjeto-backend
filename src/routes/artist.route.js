import { Router } from "express";
import { ArtistController } from "../controller/artist.controller.js";

const artistRoute = Router();
const artist = new ArtistController();

artistRoute.post("/artist", artist.createArtist);
artistRoute.get("/artist", artist.getAllArtist);
artistRoute.delete("/artist/:id", artist.deleteArtist);
artistRoute.put("/artist/:id", artist.updateArtist);


export default artistRoute;