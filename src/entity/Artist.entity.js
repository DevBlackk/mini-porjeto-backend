import { DataTypes } from "sequelize";
import { database } from "../config/db.config.js";

const Artists = database.define("Artists", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    stageName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: null,
    },
    biography: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: null,
    }
});

export default Artists;
