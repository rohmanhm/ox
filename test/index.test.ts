import ox from '../src';

test('remove null and undefined key value', () => {
  const expected = {
    className: 'only-this-obj-key-will-persist',
  };

  const actual = ox({
    ...expected,
    disabled: '',
    autoComplete: false,
    checked: undefined,
    spellCheck: null,
  });

  expect(actual).toEqual(expected);
});

test('disable strict mode not remove falsy key value', () => {
  const expected = {
    className: 'only-this-obj-key-will-persist',
    disabled: '',
    autoComplete: false,
  };

  const actual = ox(
    {
      ...expected,
      disabled: '',
      autoComplete: false,
      checked: undefined,
      spellCheck: null,
    },
    false
  );

  expect(actual).toEqual(expected);
});

test('handle falsy argument value', () => {
  const expected = {};
  let actual = ox();
  expect(actual).toEqual(expected);

  actual = ox(false);
  expect(actual).toEqual(expected);

  let active = false;
  actual = ox(active && { lorem: 'ipsum' });
  expect(actual).toEqual(expected);

  active = true;
  actual = ox(active && { lorem: 'ipsum' });
  expect(actual).toEqual({ lorem: 'ipsum' });
});
