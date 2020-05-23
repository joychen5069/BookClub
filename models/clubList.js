module.exports = (sequelize, DataTypes) => {
  const Clubs = sequelize.define("Clubs", {
    clubName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

   return Clubs;
};
