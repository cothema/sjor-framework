import {defineConfig} from "tsup";

export default defineConfig({
  entry: [
    "src/**/*.{ts,tsx}"
  ],
  format: ["esm", "cjs"],
  dts: true,
  splitting: true,
  outDir: "dist",
  clean: true,
  sourcemap: true,
  minify: false,
  target: "esnext",
  exclude: ["src/**/*.stories.*"]
});
