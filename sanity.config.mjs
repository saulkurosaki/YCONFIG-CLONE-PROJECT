import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schema } from "./sanity/schemaTypes/index.js";
import { markdownSchema } from "sanity-plugin-markdown";
import { apiVersion, dataset, projectId } from "./sanity/env.js";
import { structure } from "./sanity/structure.js";

export default defineConfig({
  name: "default",
  title: "your-project-title",
  projectId,
  dataset,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
    markdownSchema(),
  ],
  schema,
});
