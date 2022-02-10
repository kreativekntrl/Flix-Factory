const {
    Model,
    DataTypes
} = require("sequelize");
const sequelize = require("../config/connection");

// create our User model
class Network extends Model {}

Network.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "network",
});

module.exports = Network;