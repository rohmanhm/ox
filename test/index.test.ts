import { po } from '../src';

test('remove null and undefined key value', () => {
  const expected = {
    className: 'only-this-obj-key-will-persist',
    disabled: '',
    autoComplete: false,
  };

  const actual = po({
    ...expected,
    disabled: '',
    autoComplete: false,
    checked: undefined,
    spellCheck: null,
  });

  expect(actual).toEqual(expected);
});

test('strict mode remove falsy key value', () => {
  const expected = {
    className: 'only-this-obj-key-will-persist',
  };

  const actual = po(
    {
      ...expected,
      disabled: '',
      autoComplete: false,
      checked: undefined,
      spellCheck: null,
    },
    true
  );

  expect(actual).toEqual(expected);
});
