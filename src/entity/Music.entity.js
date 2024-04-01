import { DataTypes } from "sequelize";
import { database } from "../config/db.config.js";

const Music = database.define("Music", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    releaseDate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Music;
