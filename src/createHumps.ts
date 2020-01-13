// eslint-disable-next-line lodash-fp/use-fp
import { transform, set } from 'lodash';
import { isArray, isObjectLike, isPlainObject, map } from 'lodash/fp';

function createIteratee<T>(converter: (k: string) => string, self: (i: T) => T) {
  return (result: any, value: any, key: string) =>
    set(result, converter(key), isObjectLike(value) ? self(value) : value);
}

export default function createHumps(keyConverter: (k: string) => string) {
  return function humps(node: any): any {
    if (isArray(node)) return map(humps, node);
    if (isPlainObject(node)) return transform(node, createIteratee<any>(keyConverter, humps));
    return node;
  };
}
