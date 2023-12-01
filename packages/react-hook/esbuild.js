import esbuild from 'esbuild';
// 공통으로 사용할 옵션들
// https://esbuild.github.io/api/#build 에서 다양한 옵션들을 확인할 수 있다.
const baseConfig = {
  entryPoints: ['src/index.ts'], // 컴파일할 파일
  outdir: 'dist', // 컴파일된 파일이 저장될 경로
  bundle: true, // 번들링 여부
  sourcemap: true, // 소스맵 생성 여부
};
Promise.all([
  // 한 번은 cjs
  esbuild.build({
    ...baseConfig,
    format: 'cjs',
    outExtension: {
      '.js': '.cjs',
    },
  }),
  // 한 번은 esm
  esbuild.build({
    ...baseConfig,
    format: 'esm',
  }),
]).catch(() => {
  console.log('Build failed');
  process.exit(1);
});
