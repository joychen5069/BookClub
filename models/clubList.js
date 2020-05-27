module.exports = (sequelize, DataTypes) => {
  const Clubs = sequelize.define("clubs", {
    clubName: {
      type: DataTypes.TEXT,
      allowNull: false,
      
    }
  });
console.log(Clubs)
   return Clubs;
};
