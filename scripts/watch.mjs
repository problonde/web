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
  outfile: "public/out.js",
});

await ctx.watch();
console.log("watching...");
