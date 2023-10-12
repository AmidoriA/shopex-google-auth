const { Sequelize, DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Bundle extends Model {}
  Bundle.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: true,
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: true,
    },
  }, { sequelize, modelName: 'Bundle' });
  
  return Bundle;
};