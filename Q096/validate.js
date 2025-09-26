const { z } = require("zod");
const dotenv = require("dotenv");

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
  PORT: z
    .string()
    .regex(/^\d+$/)
    .transform(Number)
});

const env = envSchema.parse(process.env);

module.exports = env;