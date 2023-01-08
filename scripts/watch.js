#!/usr/bin/env node

require("esbuild").build({
  entryPoints: ["src/app.tsx"],
  bundle: true,
  sourcemap: true,
  watch: {
    onRebuild(error, result) {
      if (error) console.error("watch build failed:", error);
      else console.log("watch build succeeded:", result);
    },
  },
  plugins: [],
  outfile: "public/out.js",
}).then((result) => {
  console.log("watching...");
});
