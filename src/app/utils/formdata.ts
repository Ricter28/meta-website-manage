const isUndefined = (value: unknown) => value === undefined;

const isNull = (value: unknown) => value === null;

const isObject = (value: unknown) => value === Object(value);

const isArray = (value: unknown) => Array.isArray(value);

const isDate = (value: unknown) => value instanceof Date;

const isBlob = (value: any) =>
  value &&
  typeof value.size === 'number' &&
  typeof value.type === 'string' &&
  typeof value.slice === 'function';

const isFile = (value: any) =>
  isBlob(value) &&
  typeof value.name === 'string' &&
  (typeof value.lastModifiedDate === 'object' ||
    typeof value.lastModified === 'number');

/**
 * A convenient function that converts an object to a FormData instance
 *
 * @param obj: key-value mapping, values can be primitives or objects
 * @param cfg: Optional
 * indices: include array indices in FormData keys
 * nullsAsUndefineds: treat null values like undefined values and ignore them
 * @param fd: Existing FormData
 * @param pre: Key prefix
 */
export function objectToFormData(obj: any, cfg?: any, fd?: FormData, pre?: any) {
  cfg = cfg || {};
  cfg.indices = isUndefined(cfg.indices) ? true : cfg.indices;
  cfg.nullsAsUndefineds = isUndefined(cfg.nullsAsUndefineds) ? false : cfg.nullsAsUndefineds;
  fd = fd || new FormData();

  if (isUndefined(obj)) {
    return fd;
  } else if (isNull(obj)) {
    if (!cfg.nullsAsUndefineds) {
      fd.append(pre, '');
    }
  } else if (isArray(obj)) {
    if (!obj.length) {
      const key = pre + '[]';
      fd.append(key, '');
    } else {
      obj.forEach((value: any, index: any) => {
        const key = pre + '[' + (cfg.indices ? index : '') + ']';
        objectToFormData(value, cfg, fd, key);
      });
    }
  } else if (isDate(obj)) {
    fd.append(pre, obj.toISOString());
  } else if (isObject(obj) && !isFile(obj) && !isBlob(obj)) {
    Object.keys(obj).forEach(prop => {
      const value = obj[prop];
      if (isArray(value)) {
        while (prop.length > 2 && prop.lastIndexOf('[]') === prop.length - 2) {
          prop = prop.substring(0, prop.length - 2);
        }
      }
      const key = pre ? pre + '[' + prop + ']' : prop;
      objectToFormData(value, cfg, fd, key);
    });
  } else {
    fd.append(pre, obj);
  }
  return fd;
}

