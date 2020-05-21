module.exports = {
  development: {
    username: "root",
    password: "joychen5069",
    database: "book_club",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: process.env.DB_PASS,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: process.env.DB_PASS,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}
