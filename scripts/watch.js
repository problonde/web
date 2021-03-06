#!/usr/bin/env node

const pnpPlugin = require("@yarnpkg/esbuild-plugin-pnp").pnpPlugin;

require("esbuild").build({
  entryPoints: ["src/app.tsx"],
  bundle: true,
  sourcemap: true,
  watch: {
    onRebuild(error, result) {
      if (error) console.error("watch build failed:", error)
      else console.log("watch build succeeded:", result)
    },
  },
  plugins: [pnpPlugin()],
  outfile: "public/out.js",
}).then(result => {
  console.log("watching...")
})
