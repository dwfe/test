export const allJsDataTypes = [
  [undefined] as undefined[],
  [null] as null[],
  [true, false] as boolean[],
  [-Infinity, -9.35, -4, -0, 0, 1, 7, 8.26, Infinity, NaN] as number[],
  [-15n, 0n, 7n] as bigint[],
  ['hello', '-1', '0', '', '1'] as string[],
  [Symbol(), Symbol('id')] as symbol[],
  [{hello: 123}, {}] as object[],
  [() => 'world'] as Array<() => void>,
]

export function traverseAllJSDataTypes(onNextValue: (value: any) => void) {
  for (const valueArr of allJsDataTypes) {
    for (const value of valueArr) {
      onNextValue(value);
    }
  }
}

export function traversEachWithEachAllJSDataTypes(onNext: (a: any, b: any) => void) {
  traverseAllJSDataTypes(a => {
    traverseAllJSDataTypes(b => onNext(a, b));
  });
}
