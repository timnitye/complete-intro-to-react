// flow-typed signature: 37ae05970572b038a50c6e70c70cb6ca
// flow-typed version: /react-addons-perf_v15.x.x/flow_>=v0.16.x

declare module 'react-addons-perf' {
  declare function start(): void;
  declare function stop(): void;
  declare function printWasted(): void;
  declare function getLastMeasurements(): mixed;
  declare function printInclusive(): void;
  declare function printExclusive(): void;
  declare function printOperations(): void;
}

