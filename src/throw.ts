import './index';

export function Throw(fn: Function, message: string) {
  try {
    fn();
  } catch (err) {
    expect(err).toBeInstanceOf(Error);
    expect(err).toHaveProperty('message');
    const checkMessage = message.length === 0
      ? err.message
      : err.message.substring(0, message.length);
    expect(checkMessage).eq(message);
    return;
  }
  expect('unreachable code section').eq('but it came to this anyway');
}

export function noThrow(fn: Function) {
  expect(fn).not.toThrow();
}
