import { MusicService } from "../services/music.service.js";

class MusicController extends MusicService {
    constructor() {
        super();
    }

    async createMusic(req, res) {
        try {
            const { title, duration, releaseDate} = req.body;
            res.status(201).json({
                message: "Music created successfully",
                result: await super.createMusicService(
                    title,
                    duration,
                    releaseDate
                ),
                error: false,
            });
        } catch (error) {
            res.status(401).json({
                message: error.message,
                error: true,
            });
        }
    }

    async getAllMusics(req, res) {
        try {
            res.status(200).json({
                result: await super.getAllMusicsService(),
                error: false,
            });
        } catch (error) {
            res.status(401).json({
                message: error.message,
                error: true,
            });
        }
    }

    async updateMusic(req, res) {
        try {
            const { id } = req.params;
            const { title, duration, releaseDate } = req.body;
            await super.updateMusicService(id, title, duration, releaseDate);
            res.status(200).json({
                message: "Music updated successfully",
                error: false,
            });
        } catch (error) {
            res.status(401).json({
                message: error.message,
                error: true,
            });
        }
    }

    async deleteMusic(req, res) {
        try {
            const { id } = req.params;
            await super.deleteMusicService(id);
            res.status(200).json({
                message: "Music deleted successfully",
                error: false,
            });
        } catch (error) {
            res.status(401).json({
                message: error.message,
                error: true,
            });
        }
    }
}

export { MusicController };
