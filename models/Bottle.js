const bottleSchema = (sequelize, DataTypes) => {
    const model = sequelize.define('bottle', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Please enter the bottle name. Example, Groovy Goose."
                }
            }
        },
    })
    return model
}

module.exports = bottleSchema