// module.exports = function(sequelize, DataTypes) {
//     var books = sequelize.define("books", {
//       title: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//           len: [1]
//         }
//       },
//       author: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//           len: [1]
//         }
//       },
//       description: {
//         type: DataTypes.TEXT,
//         allowNull: false,
//         validate: {
//           len: [1]
//         }
//       },
//       votes: {
//         type: DataTypes.INT,
//         allowNull: false,
//         validate: {
//           len: [1]
//         }
//       },
//     });
  
//     books.associate = function(models) {
//       // We're saying that a books should belong to an Author
//       // A books can't be created without an Author due to the foreign key constraint
//       books.belongsTo(models.Author, {
//         foreignKey: {
//           allowNull: false
//         }
//       });
//     };
  
//     return books;
//   };
  