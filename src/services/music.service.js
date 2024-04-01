import Music from "../entity/Music.entity.js";

class MusicService {
    async createMusicService(title, duration, releaseDate) {
        await Music.sync();
        return await Music.create({
            title,
            duration,
            releaseDate,
        });
    }

    async getAllMusicsService() {
        await Music.sync();
        return await Music.findAll();
    }

    async updateMusicService(id, title, duration, releaseDate) {
        await Music.sync();
        return await Music.update(
            {
                title,
                duration,
                releaseDate,
            },
            {
                where: {
                    id,
                },
            }
        );
    }

    async deleteMusicService(id) {
        await Music.sync();
        return await Music.destroy({
            where: {
                id,
            },
        });
    }
}

export { MusicService };
