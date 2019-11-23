import { isEmpty } from './isEmpty';

// Type of object shape
export type ObjectShape = { [key: string]: any };
// Type of ignored type
export type IgnoredTypes = null | undefined;
// Util to extract type from <T> value
export type MethodKeys<T, U> = {
  [P in keyof T]: T[P] extends U ? never : P;
}[keyof T];
// Util to remove ignored key
export type RemoveIgnoredKey<T> = Pick<T, MethodKeys<T, IgnoredTypes>> | null;
// Type object return
export type PurifyObjReturn<ObjectType> = RemoveIgnoredKey<ObjectType>;

const toStr = Object.prototype.toString;

export function PurifyObj<ObjectType extends ObjectShape>(
  obj: ObjectType,
  strict?: boolean
): PurifyObjReturn<ObjectType> {
  strict = strict || false;

  let newObj = _purifyObj(obj, strict);

  if (newObj === null) {
    newObj = {} as any;
  }

  return newObj;
}

export const po = PurifyObj;

function _purifyObj<ObjectType extends ObjectShape>(
  obj: ObjectType,
  strict: boolean
): PurifyObjReturn<ObjectType> {
  let k: string;
  for (k in obj) {
    purifyProperty(k, obj[k], obj);
  }

  // Check if the object is empty
  // If it is return null to delete the object
  if (!isEmpty(obj)) {
    return obj;
  } else {
    return null;
  }

  function purifyProperty(key: string, value: any, ref: ObjectShape) {
    if (!shouldPurifyProperty(value)) {
      delete ref[key];
      return;
    }

    const typeOfValue = typeof value;

    // If value is an object (excluding date objects)
    if (typeOfValue === 'object' && toStr.call(value) !== '[object Date]') {
      // Exception - If array
      if (toStr.call(obj[k]) === '[object Array]') {
        ref[key] = ref[key].filter(shouldPurifyProperty);
      } else {
        _purifyObj(ref[key], strict);
      }

      if (isEmpty(ref[key])) {
        delete ref[key];
      }
    }
  }

  function shouldPurifyProperty(value: any) {
    return !(!value && (strict || (!strict && value == null)));
  }
}

export { isEmpty };
