import characterHealth from '../src/index';

test('healthy', () => {
  const data = { name: 'Маг', health: 90 };
  expect(characterHealth(data)).toBe('healthy');
});

test('wounded', () => {
  const data = { name: 'Маг', health: 40 };
  expect(characterHealth(data)).toBe('wounded');
});

test('critical', () => {
  const data = { name: 'Маг', health: 10 };
  expect(characterHealth(data)).toBe('critical');
});
