#!/usr/bin/env node

pnpPlugin = require("@yarnpkg/esbuild-plugin-pnp").pnpPlugin;

require("esbuild").build({
  entryPoints: ["src/app.tsx"],
  bundle: true,
  minify: true,
  plugins: [pnpPlugin()],
  outfile: "public/out.js",
}).catch(() => process.exit(1));
