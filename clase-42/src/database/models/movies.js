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

  Model.associate = (db) => {
    Model.belongsTo(db.Genres, {
      as: "genre",
      foreignKey: "genre_id",
    });

    Model.belongsToMany(db.Actors, {
      as: "actors",
      through: "actor_movie",
      foreignKey: "movie_id",
      otherKey: "actor_id",
      timestamps: false,
    });

    Model.hasOne(db.Actors, {
      as: "favorite_movie",
      foreignKey: "favorite_movie_id",
    });
  };

  return Model;
};
