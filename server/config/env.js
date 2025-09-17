import dotenv from "dotenv";
dotenv.config({
  path: ".env",
});

const _env = {
  DBURI: process.env.DBURI,
};

export const env = Object.freeze(_env);
