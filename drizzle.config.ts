import { type Config } from "drizzle-kit";

import { env } from "@seen-it/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["seen-it_*"],
} satisfies Config;
