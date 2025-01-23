import { loadEnv } from "vite";

const { IS_LOCAL, STORYBLOK_IS_PREVIEW } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  ""
);

export const isLocal = IS_LOCAL === "yes";
export const isPreview = STORYBLOK_IS_PREVIEW === "yes";
