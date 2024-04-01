import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION as string;
export default defineConfig({
  basePath: "/studio",
  name: "ISM_Content_Admin",
  title: "ISM Content Admin",

  projectId,
  dataset,
  apiVersion,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
