/**
 * This configuration is used to for the Sanity Studio that's mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schema } from "./sanity/schemaTypes";
import { markdownSchema } from "sanity-plugin-markdown";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { structure } from "./sanity/structure";

const config = defineConfig({
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

export default config;
