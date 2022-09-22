#!/usr/bin/env node

const { pnpPlugin } = require("@yarnpkg/esbuild-plugin-pnp");

require("esbuild").build({
  entryPoints: ["src/app.tsx"],
  bundle: true,
  minify: true,
  plugins: [pnpPlugin()],
  outfile: "public/out.js",
}).catch(() => process.exit(1));
