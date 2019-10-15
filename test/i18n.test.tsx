// import * as React from 'react';
// import * as ReactDOM from 'react-dom';

import { get } from '../src/get';

describe('i18n', () => {
  describe('get', () => {
    it('should get a nested property from an object', () => {
      const baz = 'foobar';
      const obj = {
        foo: {
          bar: {
            baz
          }
        }
      };

      expect(get(obj, 'foo.bar.baz')).toBe(baz);
    });

    it('should return the default value or the path', () => {
      const obj = {};
      const defaultValue = 'foo';
      const path = 'one.two.three';
      expect(get(obj, path, defaultValue)).toBe(defaultValue);
      expect(get(obj, path)).toBe(path);
    });
  });
});
