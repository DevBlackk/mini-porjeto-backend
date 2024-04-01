import { ArtistService } from "../services/artist.service.js";

class ArtistController extends ArtistService {
    constructor() {
        super();
    }

    async createArtist(req, res) {
        try {
            const { stageName, biography } = req.body;
            res.status(201).json({
                message: "Artist created successfully",
                result: await super.createArtistService(stageName, biography),
                error: false,
            });
        } catch (error) {
            res.status(500).json({
                message: "Error creating artist",
                error: true,
            });
        }
    }

    async getAllArtist(req, res) {
        try {
            res.status(200).json({
                message: "Artist retrieved successfully",
                result: await super.getAllArtistService(),
                error: false,
            });
        } catch (error) {
            res.status(401).json({
                message: "Error retrieving artist",
                error: true,
            });
        }
    }

    async updateArtist(req, res) {
        try {
            const { id } = req.params;
            const { stageName, biography } = req.body;
            res.status(200).json({
                message: "Artist updated successfully",
                result: await super.updateArtistService(
                    id,
                    stageName,
                    biography
                ),
                error: false,
            });
        } catch (error) {
            res.status(401).json({
                message: "Error updating artist",
                error: true,
            });
        }
    }

    async deleteArtist(req, res) {
        const { id } = req.params;
        res.status(200).json({
            message: "Artist deleted successfully",
            result: await super.deleteArtistService(id),
            error: false,
        });
    }
}

export { ArtistController };
