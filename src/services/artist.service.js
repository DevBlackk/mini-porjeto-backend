import Artists from "../entity/Artist.entity.js";

class ArtistService {
    async createArtistService(stageName, biography) {
        await Artists.sync();
        return await Artists.create({
            stageName,
            biography,
        });
    }

    async getAllArtistService() {
        await Artists.sync();
        return await Artists.findAll();
    }

    async updateArtistService(id, stageName, biography) {
        await Artists.sync();
        return await Artists.update(
            {
                stageName,
                biography,
            },
            {
                where: {
                    id,
                },
            }
        );
    }

    async deleteArtistService(id) {
        await Artists.sync();
        return await Artists.destroy({
            where: {
                id,
            },
        });
    }
}

export { ArtistService };