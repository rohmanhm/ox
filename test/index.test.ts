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
