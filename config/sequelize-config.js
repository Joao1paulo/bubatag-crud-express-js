import Sequelize from "sequelize";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: "bubatag",
  timezone: "-03:00",
});
export default connection;

