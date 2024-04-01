import { Sequelize } from 'sequelize';

const database = new Sequelize(process.env.DATABASE)

async function testDatabase() {
    try {
        await database.authenticate();
        console.log('Connected to the database');
    } catch (error) {
        console.log('Error connecting to the database');
    }
}

export {
    database,
    testDatabase
}