// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
const { Category } = require('.');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      //decimal(precision, scale) to set as 2 decimal places
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      //validate that value is decimal 
      validate: { 
        isDecimal:true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      //validate that is numeric
      validate: {
        isInt: true
      },
      //setting value as 10 for default
      defaultValue: 10
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
