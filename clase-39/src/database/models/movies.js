module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Movies",
    {
      title: DataTypes.STRING,
      rating: DataTypes.DECIMAL,
      awards: DataTypes.INTEGER,
      release_date: DataTypes.DATE,
      length: DataTypes.INTEGER,
    },
    {
      tableName: "movies",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return Model;
};
