import * as dotenv from 'dotenv'
dotenv.config()

import { cleanEnv, str, port, num } from "envalid";

const env = cleanEnv(process.env, {
  NODE_ENV: str({
    choices: ['development', 'staging', 'production', 'test']
  }),
  PORT: port({ default: 5002 }),
  MONGO_DB_ADMIN: str(),
  MONGO_DB_HOST: str(),
  MONGO_DB_ADMIN_PWD: str(),

  DB_PORT: num(),
  DB_USER: str(),
  DB_PASS: str(),
  DB_NAME: str(),
  DB_HOST: str(),

  JWT_KEY: str(),
  REDIS_URL: str(),
  SALT: num(),
});

export default env;