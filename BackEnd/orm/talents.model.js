// Define and export the sequelize model that represents the table Talents.

module.exports = (sequelize, DataTypes) => {
  const Talents = sequelize.define("talents", {
    title: {
      type: DataTypes.STRING,
    },
    descreption: {
      type: DataTypes.STRING,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.STRING,
    }
   
  });

  return Talents;
};