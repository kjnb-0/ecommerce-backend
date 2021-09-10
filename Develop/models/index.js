// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//EACH OF THESE NEEDS A FOREIGN KEY! FILL OUT AFTER FILLING OUT CATEGORY.JS ETC

// Products belongsTo Category
Product.belongsTo(Category)

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_producttags'
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tag_producttags'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
