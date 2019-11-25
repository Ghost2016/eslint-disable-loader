require('babel-polyfill')
import compiler from './compiler.js';

test('Inserts eslint-disable to jsFile and outputs JavaScript', async () => {
  const stats = await compiler('example.js');
  const output = stats.toJson().modules[0].source;
  expect(output).toBe(`/* eslint-disable */\nlet a = 1`);
});
