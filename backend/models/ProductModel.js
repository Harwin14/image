import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;
//db.define('namaTabel',field,opsi)
const Product = db.define(
    'product',
    {
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        url: DataTypes.STRING,
    },
    {
        freezeTableName: true,
    }
);

export default Product;

(async () => {
    await db.sync();
})();
