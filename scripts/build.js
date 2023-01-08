#!/usr/bin/env node

require("esbuild").build({
  entryPoints: ["src/app.tsx"],
  bundle: true,
  minify: true,
  plugins: [],
  outfile: "public/out.js",
}).catch(() => process.exit(1));
