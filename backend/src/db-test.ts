import * as dotenv from "dotenv";
dotenv.config();

const db = {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  knex: require("knex")({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: process.env.PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
  }),
};

export default db;
