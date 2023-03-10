const esbuild = require("esbuild");
(async () => {
  let ctx = await esbuild.context({
    entryPoints: ["src/app.ts"],
    outdir: "www/js",
    bundle: true,
  });
  let port = process.env.PORT || 3000;
  console.log("Client listen at port:", port);
  await ctx.serve({
    servedir: "www",
    port,
  });
})();
