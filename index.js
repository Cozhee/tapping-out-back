const server = require('./server')
const { sequelize } = require('./models/index')
const { BottleModel, BottleTypeModel, RecipeModel } = require('./models/index')

async function startSequelize() {
    try {
        await sequelize.sync({ force: true })

        await BottleTypeModel.create({ type: "Vodka" })
        await BottleTypeModel.create({ type: "Whiskey" })


        console.log('Sequelize connected!')
    } catch(err) {
        console.error(err)
    }
}

startSequelize()
server()