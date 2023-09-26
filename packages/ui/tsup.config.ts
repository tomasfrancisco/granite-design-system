import { defineConfig } from "tsup";
import CssModulesPlugin from "esbuild-css-modules-plugin";

export default defineConfig({
  esbuildPlugins: [CssModulesPlugin()],
  format: ["esm", "cjs"],
  dts: true,
  external: ["react"],
});
