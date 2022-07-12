const { Sequelize, DataTypes } = require('sequelize')
const bottleSchema = require('./Bottle')
const bottleTypeSchema = require('./BottleType')
const recipeSchema = require('./Recipe')
require('dotenv').config()

const DATABASE_URL = process.env.DATABASE_URL

const DATABASE_CONFIG = {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
}

const sequelize = new Sequelize(DATABASE_URL, DATABASE_CONFIG)

const BottleModel = bottleSchema(sequelize, DataTypes)
const BottleTypeModel = bottleTypeSchema(sequelize, DataTypes)
const RecipeModel = recipeSchema(sequelize, DataTypes)

BottleModel.hasOne(BottleTypeModel)
BottleTypeModel.belongsTo(BottleModel)

RecipeModel.belongsToMany(BottleTypeModel, { through: 'RecipeBottleTable' })

module.exports = { sequelize, BottleModel, BottleTypeModel, RecipeModel }