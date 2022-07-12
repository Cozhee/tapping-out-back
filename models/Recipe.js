const recipeSchema = (sequelize, DataTypes) => {
    const model = sequelize.define('recipe', {
        name: {
            type: DataTypes.STRING,
        },
        ingredients: {
            type: DataTypes.ARRAY(DataTypes.STRING)
        }
    })
    return model
}

module.exports = recipeSchema