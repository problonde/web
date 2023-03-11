#!/usr/bin/env node

import * as esbuild from "esbuild";

esbuild
  .build({
    entryPoints: ["src/app.tsx"],
    bundle: true,
    minify: true,
    logOverride: {
      "different-path-case": "info",
    },
    plugins: [],
    outfile: "public/out.js",
  })
  .catch(() => process.exit(1));
