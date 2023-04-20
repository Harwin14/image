import { Sequelize } from 'sequelize';

const db = new Sequelize('upload_db', 'harwin', '153426@Asu', {
    host: 'localhost',
    dialect: 'mysql',
});

export default db
