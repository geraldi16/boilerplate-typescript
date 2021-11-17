import { Example } from './example';

describe('example test', () => {
  it('successfully prints hello world', () => {
    expect(Example.greet()).toBe('hello world');
  })
})