#!/usr/bin/env node

import * as esbuild from "esbuild";

const ctx = await esbuild.context({
  entryPoints: ["src/app.tsx"],
  bundle: true,
  sourcemap: true,
  plugins: [],
  logOverride: {
    "different-path-case": "info",
  },
  outdir: "public",
});

await ctx.watch();
console.log("watching...");
