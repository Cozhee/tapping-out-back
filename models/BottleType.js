const bottleTypeSchema = (sequelize, DataTypes) => {
    const model = sequelize.define('bottleType', {
        type: {
            type: DataTypes.STRING,
        }
    })

    return model
}

module.exports = bottleTypeSchema