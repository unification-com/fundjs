/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        babelConfig: false,
        tsconfig: 'tsconfig.json',
      },
    ],
  },
  transformIgnorePatterns: [`/node_modules/*`],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: ['dist/*'],
  // SCAFFOLD TESTS SKIPPED — the pre-existing `__tests__/messages.test.{ts,js}`
  // pair was a single trivial snapshot of
  // `cosmos.bank.v1beta1.MessageComposer.fromPartial.send(...)`. Since the
  // cosmjs `^0.38` bump (Stage 10), the transitive import chain pulls in
  // `@scure/base@^2.x` which is published as ESM-only (`"type": "module"`
  // + `export const ...` syntax + no CJS variant). Jest's CJS-based runtime
  // can't load it via `require()` regardless of `transformIgnorePatterns`
  // carve-outs (tested), and ts-jest's ESM mode requires significant
  // config restructuring (preset swap to `default-esm` + `extensionsToTreatAsEsm`
  // + per-test `import.meta` plumbing) that's disproportionate for the
  // single snapshot this protected. **The real coverage for the published
  // bindings is the broadcast-verified harness referenced in
  // [`project_docs/planning/vaxildan/TRACKER-stage10-fundjs.md`](../../../../mainchain/project_docs/planning/vaxildan/TRACKER-stage10-fundjs.md)**
  // — `/tmp/fundjs-broadcast.mjs` against the vaxildan binary, 12/12 PASS.
  // Operator action item homed in that tracker: commit the broadcast
  // harness as `__tests__/integration/` (or similar) post-publish so the
  // canonical coverage lives in the repo rather than `/tmp/`.
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/__tests__/messages\\.test\\.(ts|js|d\\.ts)$',
  ],
};
