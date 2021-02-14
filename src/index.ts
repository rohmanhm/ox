import { isEmpty } from './isEmpty';

// Type of object shape
export type Object = { [key: string]: any };
// Type of ignored type
export type IgnoredTypes = null | undefined;
// Util to extract type from <T> value
export type MethodKeys<T, U> = {
  [P in keyof T]: T[P] extends U ? never : P;
}[keyof T];
// Util to remove ignored key
export type RemoveIgnoredKey<T> = Pick<T, MethodKeys<T, IgnoredTypes>> | null;
// Type object return
export type OxReturn<ObjectType> = RemoveIgnoredKey<ObjectType>;

const toStr = Object.prototype.toString;

function cleanObject<T extends Object>(obj: T, strict: boolean): OxReturn<T> {
  let k: string;
  for (k in obj) {
    cleanProperty(k, obj[k], obj);
  }

  // Check if the object is empty
  // If it is return null to delete the object
  if (!isEmpty(obj)) {
    return obj;
  } else {
    return null;
  }

  function cleanProperty(key: string, value: any, ref: Object) {
    if (!shouldCleanProperty(value)) {
      delete ref[key];
      return;
    }

    const typeOfValue = typeof value;

    // If value is an object (excluding date objects)
    if (typeOfValue === 'object' && toStr.call(value) !== '[object Date]') {
      // Exception - If array
      if (toStr.call(obj[k]) === '[object Array]') {
        ref[key] = ref[key].filter(shouldCleanProperty);
      } else {
        cleanObject(ref[key], strict);
      }

      if (isEmpty(ref[key])) {
        delete ref[key];
      }
    }
  }

  function shouldCleanProperty(value: any) {
    return !(!value && (strict || (!strict && value == null)));
  }
}

export default function ox<T, U extends boolean>(
  obj?: T,
  strict?: U
): T extends boolean
  ? Object
  : T extends Object
  ? U extends false
    ? T
    : OxReturn<T>
  : T {
  if (typeof strict === 'undefined') {
    strict = true as U;
  }
  if (!obj || typeof obj === 'boolean') return {} as any;
  return cleanObject(obj as Object, strict as boolean) ?? ({} as any);
}

export { isEmpty };
