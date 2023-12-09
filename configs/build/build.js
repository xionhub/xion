import esbuild from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';

export const xionEsBuildConfig = async (options) => {
  const baseConfig = {
    entryPoints: ['src/index.ts'],
    outdir: 'dist',
    bundle: true,
    sourcemap: true,
    treeShaking: true,
    minify: true,
    format: 'cjs',
    plugins: [nodeExternalsPlugin()],
  };
  try {
    return await Promise.all([
      // 한 번은 cjs
      esbuild.build({
        ...baseConfig,
        ...options,
        format: 'cjs',
        outExtension: {
          '.js': '.cjs',
        },
      }),
      // 한 번은 esm
      esbuild.build({
        ...baseConfig,
        ...options,
        format: 'esm',
      }),
    ]);
  } catch {
    console.log('Build failed');
    process.exit(1);
  }
};
