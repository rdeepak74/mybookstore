import dotenv from "dotenv";
dotenv.config();

const isProd = process.env.PROD_NODE_ENV === "production";

export const envConfig = {
  BACKEND_BASE_URL: isProd
    ? process.env.PROD_BACKEND_URL
    : process.env.DEV_BACKEND_URL,

  FRONTEND_BASE_URL: isProd
    ? process.env.PROD_FRONTEND_URL
    : process.env.DEV_FRONTEND_URL,
};
