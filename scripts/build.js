#!/usr/bin/env node

require("esbuild").build({
  entryPoints: ["src/app.tsx"],
  bundle: true,
  minify: true,
  logOverride: {
    "different-path-case": "info",
  },
  plugins: [],
  outfile: "public/out.js",
}).catch(() => process.exit(1));
