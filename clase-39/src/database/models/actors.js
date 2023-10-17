module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Actors",
    {
      firstName: {
        field: "first_name",
        type: DataTypes.STRING,
      },
      lastName: {
        field: "last_name",
        type: DataTypes.STRING,
      },
      rating: DataTypes.DECIMAL,
    },
    {
      tableName: "actors",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  Model.associate = (db) => {
    Model.belongsToMany(db.Movies, {
      as: "movies",
      through: "actor_movie",
      foreignKey: "actor_id",
      otherKey: "movie_id",
      timestamps: false,
    });

    Model.belongsTo(db.Movies, {
      as: "favoriteMovie",
      foreignKey: "favorite_movie_id",
    });
  };

  return Model;
};
